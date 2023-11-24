import { Component } from '@angular/core';
import { Host } from 'src/app/commons/common.objects';
import { MainService } from '../main.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent {
 host : Host ={
   hostId: 0,
   receiverMailId: '',
   hostMailId: '',
   employee: {
     employeeId: 0,
     employeeName: '',
     companyEntity: {
       entity_id: 0,
       entity_description: '',
       status: false
     },
     designation: {
       designationId: 0,
       designation: '',
       status: false
     },
     department: {
       department_id: 0,
       department_description: '',
       entity: {
         entity_id: 0,
         entity_description: '',
         status: false
       },
       status: false
     },
     section: {
       section_id: 0,
       section_description: '',
       department: {
         department_id: 0,
         department_description: '',
         entity: {
           entity_id: 0,
           entity_description: '',
           status: false
         },
         status: false
       },
       status: false
     },
     status: false,
     employeeEmail: ''
   },
   appointment: {
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
   },
   otp: 0,
   approved: false
 }
 employees : any[] = [];

 constructor(private service : MainService,private snackBar : MatSnackBar){
    this.service.getAllHostEmployees((data:any)=>{
       this.employees=data;
       this.generateRandomNumber();
    })
 }

 public onEmployeeSelectionChange(employeeId : any){
  console.log(employeeId);
  this.service.getemployee(employeeId, (data : any)=>{
    console.log(data);
    this.host.employee=data;
  })
 }

 randomNumber: number | undefined;

  generateRandomNumber() {
    this.randomNumber = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number
    this.host.otp = this.randomNumber;
  }


 public addHost(){
  console.log(this.host);
  this.service.addHost(this.host, (data : any)=>{
    console.log(data);
    if (data && data.success) {
      this.openErrorSnackBar('Error Submitting form');
    } else {
      this.openSuccessSnackBar('Successfully Submitted');
    }
  })
 }

 private openSuccessSnackBar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 3000,
    panelClass: ['success-snackbar'],
    verticalPosition: 'top' // Apply the success styles
  });
}

private openErrorSnackBar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 3000,
    panelClass: ['error-snackbar'],
    verticalPosition: 'top' // Apply the error styles
  });
}

}
