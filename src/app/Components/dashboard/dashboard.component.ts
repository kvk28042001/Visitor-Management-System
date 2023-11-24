import { Component, Input } from '@angular/core';
import { MainService } from '../main.service';
import { HttpClient } from '@angular/common/http';
import { AppointmentCountComponentComponent } from '../appointment-count-component/appointment-count-component.component';
import { CheckInCountComponentComponent } from '../check-in-count-component/check-in-count-component.component';
import { CheckOutCountComponentComponent } from '../check-out-count-component/check-out-count-component.component';
import { YetToVisitCountComponentComponent } from '../yet-to-visit-count-component/yet-to-visit-count-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input("companies") companies! : any;
  @Input("visitors") visitors! : any;

  appointmentcount  : number =0;
  checkInRegisteredCount: any =0;
  checkOutRegisteredCount: any=0;
  yetToVisitCount: any=0;
  appointmentList : any[] = [];
  checkInRegisteredCountList : any[] = [];
  checkOutRegisteredCountList : any[] = [];
  yetToVisitCountList : any[] = [];
  notApprovedAppointments : any[] = [];
  approvedAppointments : any[] = [];
  status : boolean = false;
  




  constructor(private httpService: MainService,public http : HttpClient,public dialog: MatDialog) {
    httpService.fetchAllVisitorCount((data: any) => {
      console.log(data);
      this.appointmentList = data;
      this.appointmentcount = this.appointmentList.length;
    });

    httpService.fetchcheckinVisitorCount((data: any) => {
      console.log(data);
      this.checkInRegisteredCountList = data;
      this.checkInRegisteredCount = this.checkInRegisteredCountList.length;
    });

    httpService.fetchcheckoutVisitorCount((data: any) => {
      console.log(data);
      //this.checkOutRegisteredCount = data; 
      this.checkOutRegisteredCountList = data;
      console.log(data);
      this.checkOutRegisteredCount = this.checkOutRegisteredCountList.length;
    });

    httpService.fetchYetToVisitVisitorCount((data: any) => {
      console.log(data);
      this.yetToVisitCountList = data;
                         console.log(data);
                           this.yetToVisitCount = this.yetToVisitCountList.length;
                           console.log(this.yetToVisitCount);
                           this.getAppointmentsForSixYears();
    });


    this.httpService.getAllNotApprovedAppointments((data : any)=>{
        console.log(data);
        this.notApprovedAppointments = data;
    })

    this.httpService.getAllApprovedAppointments((data : any)=>{
      console.log(data);
      this.approvedAppointments = data;
  })

  const currentYear: number = new Date().getFullYear();

  this.getAppointmentCountInMonth(currentYear);

             

   //this.http.get('http://localhost:9090/visitor/')

             



  }

  public onToggleChange(){
     this.status = !this.status;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppointmentCountComponentComponent, {
      width: '700px',height: '400px', // Set the width of your dialog
      data: {
        // Pass data to the dialog if needed
        content: 'This is the data from the div.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(CheckInCountComponentComponent, {
      width: '700px',height: '400px', // Set the width of your dialog
      data: {
        // Pass data to the dialog if needed
        content: 'This is the data from the div.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(CheckOutCountComponentComponent, {
      width: '700px',height: '400px', // Set the width of your dialog
      data: {
        // Pass data to the dialog if needed
        content: 'This is the data from the div.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(YetToVisitCountComponentComponent, {
      width: '700px',height: '400px', // Set the width of your dialog
      data: {
        // Pass data to the dialog if needed
        content: 'This is the data from the div.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }







  data : any[] = [];
  year : any = 0;
  years: number[] = [2022, 2023, 2024, 2025];

  generateYearRange() {
    const currentYear = new Date().getFullYear();
    const yearsInPast = 10; // Adjust as needed
    const yearsInFuture = 10; // Adjust as needed

    for (let i = currentYear - yearsInPast; i <= currentYear + yearsInFuture; i++) {
      this.years.push(i);
    }

    // Set the current year as the default selected year
    this.year = currentYear;
  }

  public getAppointmentCountInMonth(year : any){
    console.log(year);
     this.httpService.getAppointmentCountInMonth(year,(data : any)=>{
          console.log(data);
          this.data = data;
          this.dataa.datasets[0].data = data;

          // Optionally, you can update other properties of 'dataa' if needed
          // this.dataa.datasets[0].backgroundColor = ...;

          // Assign the updated 'dataa' object to ensure reactivity
          this.dataa = { ...this.dataa };
     })
  }

  yearsData : any[] = [];

  public getAppointmentsForSixYears(){
      this.httpService.getAppointmentCountForYears((data : any)=>{
           this.yearsData = data;
           this.dataabeta.datasets[0].data = data;
           console.log(data);
           this.dataabeta = { ...this.dataabeta };
      })  
  }
  


  //Bar Chart
type = 'pie';
type2 = 'bar';
dataa = {
  labels: ["January", "February", "March", "April", "May", "June", "July","August","september","october","november","december"],
  datasets: [{
                label: "My First dataset",
                //data: [65, 59, 45, 81, 56, 55, 40, 20, 20, 40, 30, 21],
                data : this.data,
                backgroundColor: ["#fee327", "#fdca54", "#f6a570", "#f1969b", "#f08ab1", "#c78dbd", "#927db6", "#5da0d7", "#00b3e1", "#50bcbf", "#65bda5", "#87bf54"],
                
             },
            //  {
            //       label: "My Second dataset",
            //       data: [80, 59, 75, 81, 85, 55, 40, 30],
            //       backgroundColor: ["#f38b4a"],
            //  },
            ]
};

dataabeta = {
  labels: ["2023", "2024", "2025", "2026", "2027", "2028"],
  datasets: [
             {
                label: "Yearly dataset",
                data: this.yearsData,
                backgroundColor: ["#fa931a", "#ffc309", "#fff600", "#cdde25", "#8bc83b", "#04b99e", "#01aef3","#5954a8"],
             }
            //  {
            //       label: "My Second dataset",
            //       data: [80, 59, 75, 81, 85, 55, 40, 30],
            //       backgroundColor: ["#f38b4a"],
            //  },
            ]
};
options = {
            maintainAspectRatio: true,
            legend: {
              display: true,
              labels: {
                fontColor: 'white',
              },
            },
          };

options2 = {
            maintainAspectRatio: true,
            legend: {
              display: false,
              labels: {
                fontColor: 'black', // legend color (can be hexadecimal too)
              },
            },
            scales: {
                yAxes : [{
                    ticks : {
                        max : 90,    
                        min : 0,
                        fontColor: 'white',
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Visitor Count',
                      fontColor: 'white'
                    }
                }],
                xAxes : [{
                  ticks : {
                      fontColor: 'white',
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Year',
                    fontColor: 'white'
                  }
              }]
            },
            
          };
}
