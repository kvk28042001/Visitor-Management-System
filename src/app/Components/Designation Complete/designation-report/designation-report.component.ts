import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-designation-report',
  templateUrl: './designation-report.component.html',
  styleUrls: ['./designation-report.component.css']
})
export class DesignationReportComponent {
  designations: any[] = [];

  constructor(private httpClient:HttpClient,private service : MainService){
    this.service.getAllDesignation((data : any)=>{
        this.designations = data;
    })
  }



}
