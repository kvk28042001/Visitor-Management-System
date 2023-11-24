import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Department } from 'src/app/commons/common.objects';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-departmentreport',
  templateUrl: './departmentreport.component.html',
  styleUrls: ['./departmentreport.component.css']
})
export class DepartmentreportComponent {
  departments: any[] = [];
  department: any = {};
  companyEntity: any ={};
  
  Companiesentity: any[] = [];
  depart : Department = {
    department_id: 0,
    department_description: '',
    entity: {
      entity_id: 0,
      entity_description: '',
      status: false
    },
    status: false
  }
  
  constructor(private httpClient:HttpClient,private service : MainService){
     this.service.getAlldepartments((data : any)=>{
        this.departments = data;
     })
  }


}
