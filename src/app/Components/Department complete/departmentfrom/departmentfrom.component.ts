import { Component } from '@angular/core';
import { MainService } from '../../main.service';
import { FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/commons/common.objects';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-departmentfrom',
  templateUrl: './departmentfrom.component.html',
  styleUrls: ['./departmentfrom.component.css']
})
export class DepartmentfromComponent {
  departments: any[] = [];
  // department: any = {};
  companyEntity: any ={};
  Companiesentity: any[] = [];
  department : Department = {
    department_id: 0,
    department_description: '',
    entity: {
      entity_id: 0,
      entity_description: '',
      status: false
    },
    status: false
  }

  entities: any[]=[];
  
  // httpClient: any;
  idforms : any[] = []; 
  idform : any = {}; 

  constructor(private httpService: MainService,private  httpClient : HttpClient ,private router :Router,private route : ActivatedRoute,private snackBar : MatSnackBar) {
    this.httpService.getAllCompaniesentity((data : any)=>{
        this.entities = data;
    })



    
  }

  receivedData : any = 0;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.receivedData = params.get('data');
      this.httpService.getdepartment(this.receivedData,(data : any)=>{
          this.department = data;
      })                        
    });
  } 

  public onAdd(entity_id : any){
      console.log(entity_id)
      this.httpService.getCompanyentity(entity_id,(data : any)=>{
          this.department.entity = data;
      })
  }

  
  public addCompanyProcess(): void {
    console.log(this.department)
      this.httpService.adddepartment(this.department,(data : any)=>{
          console.log(data);
          if (data && data.success) {
            this.openErrorSnackBar('Error Submitting form');
          } else {
            this.openSuccessSnackBar('Successfully Submitted');
          }
      })
  }

  private openSuccessSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar'],
      verticalPosition: 'top' // Apply the success styles
    });
  }

  private openErrorSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['error-snackbar'],
      verticalPosition: 'top' // Apply the error styles
    });
  }

}
  