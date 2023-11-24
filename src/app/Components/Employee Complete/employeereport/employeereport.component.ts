import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-employeereport',
  templateUrl: './employeereport.component.html',
  styleUrls: ['./employeereport.component.css']
})
export class EmployeereportComponent {
  employees: any[] = [];
  // DepartmentList :any;
  // selectedValue:any;

  employee: any = {};

  departments: any[] = [];
  sections: any[] = [];
  designations: any[] = [];
  Companiesentity: any[] = [];
  entities : any[] = [];
  
  constructor(private httpClient:HttpClient,private service : MainService){
    this.service.getAllemployees((data : any)=>{
        this.employees = data;
    })
  }
}
