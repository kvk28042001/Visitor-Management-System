import { Component } from '@angular/core';
import { Facility } from 'src/app/commons/common.objects';
import { MainService } from '../main.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent {
  facility : Facility = {
    facility_id: 0,
    facility_description: '',
    facilityCheckIn: '',
    facilityCheckOut: ''
  }

  constructor (private service : MainService,private snackBar : MatSnackBar){

  }

  
  public addFacility(){
    this.service.addFacility(this.facility,(data:any)=>{
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
    verticalPosition: 'top'
     // Apply the error styles
     // Apply the error styles
     // Apply the error styles
  });
}
}

