import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Role } from 'src/app/commons/common.objects';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-role-report',
  templateUrl: './role-report.component.html',
  styleUrls: ['./role-report.component.css']
})
export class RoleReportComponent {
  roles: any[] = [];
  menus: any[] = [];
  baseUri: string = 'http://localhost:9090/visitor';
  role : Role = {
    role_id: 0,
    role_description: '',
    menuGroup: {
      menu_id: 0,
      menuName: '',
      menuGroup: '',
      status: false
    },
    status: false
  }
  
  
  constructor(private httpClient:HttpClient,private service : MainService){
     this.service.getAllroles((data : any)=>{
        this.roles = data;
     })
  }


}
