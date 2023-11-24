import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainService } from '../main.service';

@Component({
  selector: 'app-appointment-count-component',
  templateUrl: './appointment-count-component.component.html',
  styleUrls: ['./appointment-count-component.component.css']
})
export class AppointmentCountComponentComponent {

  appointmentList : any[] = [];

  constructor(private http : HttpClient,private service : MainService,public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
        this.service.fetchAllVisitor((data : any)=>{
             this.appointmentList = data;
        })
  }

}
