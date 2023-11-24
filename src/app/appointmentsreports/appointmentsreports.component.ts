import { Component } from '@angular/core';
import { MainService } from '../Components/main.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-appointmentsreports',
  templateUrl: './appointmentsreports.component.html',
  styleUrls: ['./appointmentsreports.component.css']
})
export class AppointmentsreportsComponent {

  year1 : any = 0;
  year2 : any = 0;
  month : any = 0;
  startDate : any = 0;
  endDate : any = 0;
  years: number[] = [2022, 2023, 2024, 2025];
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  appointments : any[] = [];
  companyName : any = '';
  companyAddress : any = '';

  constructor(private http : HttpClient,private service : MainService){
       this.service.getAllCompanies((data : any)=>{
          this.companyName = data[0].name;
          this.companyAddress = data[0].address1 + data[0].address2;
       })
  }

  public getYearlyAppointments(year : any){
     this.year1 = year;
     this.service.getYearlyAppointments(year,(data : any)=>{
         this.appointments = data;
         console.log(data);
     })
  }

  public getMonthlyAppointments(year : any,month : any){
     this.year2 = year;
     this.month = month;
     for(let i = 0;i<this.months.length;i++){
        if(this.months[i]==month){
          this.service.getMonthlyAppointments(year,i+1,(data : any)=>{
            this.appointments = data;
            console.log(data);
          })
        }
     }
  }

  public getAppointmentsWithinRanges(){
     console.log(this.startDate);
     console.log(this.endDate);
     this.http.get<any[]>(this.service.hostUrl+`/withinRange/${this.startDate}/${this.endDate}`)
      .subscribe(data => {
        // Handle the response data as needed
        console.log(data);
        this.appointments = data;
      });
  }

  visitorImages : any[] = [];

  public getVisitorImages(appointment_id : any){
    for(let i = 0;i<this.appointments.length;i++){
      if(this.appointments[i].appointment_id == appointment_id){
        for (let visitor of this.appointments[i].visitors) {
          console.log(visitor.visitor_photo);
          this.service.getImageFromServer(visitor.visitor_photo).subscribe(
            (imageData: ArrayBuffer) => {
              const imageBlob = new Blob([imageData], { type: 'image/jpeg' }); // Change to the appropriate type for your image
              this.visitorImages.push(URL.createObjectURL(imageBlob)); 
            },
            (error) => {
              console.error('Error fetching image:', error);
            }
          );
        }
      }
    }
  }

  downloadPDF(): void {
    const content = document.getElementById('pdfContent') as HTMLElement;
  
    // Use html2canvas to capture the content as an image
    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
  
      // Create a jsPDF instance
      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      });
  
      // Calculate width and height to fit the content on the PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
      // Add the captured image to the PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
  
      // Save the PDF
      pdf.save('appointments_report.pdf');
    });
  }
}
