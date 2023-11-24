import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainService } from '../main.service';


@Component({
  selector: 'app-yet-to-visit-count-component',
  templateUrl: './yet-to-visit-count-component.component.html',
  styleUrls: ['./yet-to-visit-count-component.component.css']
})
export class YetToVisitCountComponentComponent {

  yetToVisitCountList : any[] = [];

  constructor(private http : HttpClient,private service : MainService,public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
        this.service.fetchYetToVisitVisitorCount((data : any)=>{
            this.yetToVisitCountList = data;
        })
    }

}
