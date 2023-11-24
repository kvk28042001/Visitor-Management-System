import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppointmentType } from 'src/app/commons/common.objects';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-appointment-type',
  templateUrl: './appointment-type.component.html',
  styleUrls: ['./appointment-type.component.css']
})
export class AppointmentTypeComponent {
  appointmenttype: any[] = [];
  aType: AppointmentType = {
    appointmentTypeId: 0,
    appointmentType: '',
    status: false
  };
 
  
  constructor(private httpService: MainService,private http : HttpClient, private router : Router,private snackBar : MatSnackBar) {
    // httpService.getAllmenus((data: any[]) => {
    //   this.menus = data;
    // });
  }


  

  public addaTypeProcess(): void {
    //  this.http.post("http://localhost:9090/menu",this.aType)
    //           .subscribe((data : any)=>{
    //             this.router.navigate(['/'])
    //               console.log(data);
    //           }) 
    this.httpService.addAppointmentType(this.aType,(data : any)=>{
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
