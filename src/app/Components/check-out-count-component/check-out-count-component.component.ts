import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainService } from '../main.service';


@Component({
  selector: 'app-check-out-count-component',
  templateUrl: './check-out-count-component.component.html',
  styleUrls: ['./check-out-count-component.component.css']
})
export class CheckOutCountComponentComponent {

  checkOutRegisteredCountList : any[] = [];

  constructor(private http : HttpClient,private service : MainService,public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
        this.service.fetchcheckoutVisitorCount((data : any)=>{
             this.checkOutRegisteredCountList = data;
        })
    }

}
