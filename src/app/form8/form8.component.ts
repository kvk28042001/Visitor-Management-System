import { HttpClient } from '@angular/common/http';
import { Component, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment, Appointment1 } from '../commons/common.objects';
import { MainService } from '../Components/main.service';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-form8',
  templateUrl: './form8.component.html',
  styleUrls: ['./form8.component.css']
})
export class Form8Component {

  panelOpenState : boolean = false;

  currentDate : any = '';

  onStartblur():void{
   // console.log(this.appointmentform.value.appointment_start)
  }
  onEndblur():void{
   // console.log(this.appointmentform.value.appointment_end)
  }
  onTypeblur():void{
   // console.log(this.appointmentform.value.appointment_type)
  }

  appointment : Appointment1 = {
    appointment_id: 0,
    appointment_start: '',
    appointment_end: '',
    visitors: [],
    vehicles: [],
    facilityVisitedList: [],
    sectionVisitedList: [],
    appointment_type: {
      appointmentTypeId: 0,
      appointmentType: '',
      status: false
    },
    checkInTime: '',
    checkOutTime: '',
    companyName: '',
    place: '',
    companyPhone: ''
  };

  constructor(private httpClient : HttpClient,private service : MainService,private route : ActivatedRoute,private sanitizer : DomSanitizer){

  }

  appointment_id : any = 0;

  // arrayBufferToBase64(buffer: ArrayBuffer): string {
  //   const binary = new Uint8Array(buffer);
  //   const base64 = btoa(String.fromCharCode.apply(null, binary));
  //   return 'data:image/png;base64,' + base64; // Adjust the MIME type accordingly
  // }

  visitorImages : any[] = [];


  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
         this.appointment_id = params.get('data');
         //this.updateCompanyProcess(this.entity_id);
         this.service.getAppointment(this.appointment_id,(data : any)=>{
          this.appointment = data;
          this.getVisitorIds();
          this.getdriverImages();
          this.getdriverLicense();
          for (let visitor of this.appointment.visitors) {
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
         })
    }

    )
}



visitorIds : any[] = [];

public getVisitorIds(){
  for (let visitor of this.appointment.visitors) {
    console.log(visitor.visitor_aadhar);
    const filePath = visitor.visitor_aadhar;
    this.service.getFile(filePath).subscribe((fileBlob: Blob) => {
      const file = new Blob([fileBlob], { type: 'application/pdf' });
      this.visitorIds.push(this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file)));
    });
}
}

downloadPdf(visitorId: SafeResourceUrl, fileName: string): void {
  const url = this.sanitizer.sanitize(SecurityContext.URL, visitorId);
  const link = document.createElement('a');
  link.href = url || '';
  link.target = '_blank';
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

driverImages : any[] = [];

getdriverImages(){
  for (let vehicle of this.appointment.vehicles) {
    console.log(vehicle.driverPhoto);
    this.service.getImageFromServer(vehicle.driverPhoto).subscribe(
      (imageData: ArrayBuffer) => {
        const imageBlob = new Blob([imageData], { type: 'image/jpeg' }); // Change to the appropriate type for your image
        this.driverImages.push(URL.createObjectURL(imageBlob)); 
      },
      (error) => {
        console.error('Error fetching image:', error);
      }
    );
}
}

driverLicense : any[] = [];

getdriverLicense(){
  for (let vehicle of this.appointment.vehicles) {
    console.log(vehicle.driverLicense);
    const filePath = vehicle.driverLicense;
    this.service.getFile(filePath).subscribe((fileBlob: Blob) => {
      const file = new Blob([fileBlob], { type: 'application/pdf' });
      this.driverLicense.push(this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file)));
    });
}
}




// public visitorImages: { [key: string]: ArrayBuffer } = {};
    

//     public getVisitorImage(imageUrl : any) : any{
//       for (let visitor of this.appointment.visitors) {
//         console.log(imageUrl);
//         this.service.getImageFromServer(imageUrl).subscribe(
//           (imageData: ArrayBuffer) => {
//             const imageBlob = new Blob([imageData], { type: 'image/jpeg' }); // Change to the appropriate type for your image
//             return (URL.createObjectURL(imageBlob));
//             console.log("image");
             
//           },
//           (error) => {
//             console.error('Error fetching image:', error);
//           }
//         );
//       }
      
//     }

public checkInUpdate(){
  this.service.checkInUpdate(this.appointment_id,this.appointment,(data : any)=>{
      console.log(data);  
  })
}

public checkOutUpdate(){
this.service.checkOutUpdate(this.appointment_id,this.appointment,(data : any)=>{
  console.log(data);  
})
}

public sectionCheckIn(sectionVisited_id : number){
  console.log(sectionVisited_id);
  console.log(this.appointment_id);
  this.service.sectionCheckIn(sectionVisited_id,this.appointment_id,this.appointment,(data : any)=>{
    console.log(data);  
})
}

public sectionCheckOut(sectionVisited_id : number){
  console.log(sectionVisited_id);
  console.log(this.appointment_id);
  this.service.sectionCheckOut(sectionVisited_id,this.appointment_id,this.appointment,(data : any)=>{
    console.log(data);  
})
}

public facilityCheckIn(facilityVisited_id : number){
this.service.facilityCheckIn(facilityVisited_id,this.appointment_id,this.appointment,(data : any)=>{
  console.log(data);  
})
}

public facilityCheckOut(facilityVisited_id : number){
this.service.facilityCheckOut(facilityVisited_id,this.appointment_id,this.appointment,(data : any)=>{
  console.log(data);  
})
}


}