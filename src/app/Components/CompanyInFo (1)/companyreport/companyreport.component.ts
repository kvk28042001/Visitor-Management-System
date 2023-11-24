import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Company } from 'src/app/commons/common.objects';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-companyreport',
  templateUrl: './companyreport.component.html',
  styleUrls: ['./companyreport.component.css']
})
export class CompanyreportComponent {
  companies: any[] = [];
  comp : Company = {
    companyId: 0,
    name: '',
    logoPath: '',
    address: '',
    address1: '',
    address2: '',
    phoneNo: '',
    phoneNo1: '',
    email: '',
    website: ''
  }
  baseUri : string = 'http://localhost:9090/company';
  constructor(private httpClient:HttpClient,private service : MainService){
     this.service.getAllCompanies((data : any)=>{
        this.companies = data;
     })
  }
}