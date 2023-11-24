import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entity } from 'src/app/commons/common.objects';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-entityreport',
  templateUrl: './entityreport.component.html',
  styleUrls: ['./entityreport.component.css'] 
})
export class EntityreportComponent {
  companyEntityReport : any[]= [];
  entity : Entity = {
    entity_id: 0,
    entity_description: '',
    status: false
  }
  baseUri: string = 'http://localhost:9090/Entity';
  constructor(private httpClient:HttpClient,private service : MainService){
    this.service.getAllCompaniesentity((data : any)=>{
        this.companyEntityReport = data;
    })
  }
}