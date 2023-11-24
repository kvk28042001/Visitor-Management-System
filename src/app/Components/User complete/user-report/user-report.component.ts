import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent {
  users: any[] = [];
  roles: any[] = [];
  sections: any[] = [];
  user: any = {};
  baseUri: string = 'http://localhost:9090';
  
  constructor(private httpClient:HttpClient,private service : MainService){
    this.service.getAllusers((data : any)=>{
        this.users = data;
    })
  }



}
