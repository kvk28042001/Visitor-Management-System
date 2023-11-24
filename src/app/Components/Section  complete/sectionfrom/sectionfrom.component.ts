import { Component } from '@angular/core';
import { MainService } from '../../main.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from 'src/app/commons/common.objects';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sectionfrom',
  templateUrl: './sectionfrom.component.html',
  styleUrls: ['./sectionfrom.component.css']
})
export class SectionfromComponent {
  sections: any[] = [];
  departments: any[] = [];
  section1: any = {};
  section : Section ={
    section_id: 0,
    section_description: '',
    department: {
      department_id: 0,
      department_description: '',
      entity: {
        entity_id: 0,
        entity_description: '',
        status: false
      },
      status: false
    },
    status: false
  }
  //httpClient: any;
  sect : any = {};
  exist : boolean = false;

  baseUri: string = 'http://localhost:5050/asm';
  constructor(private httpService: MainService,private httpClient : HttpClient,private route : ActivatedRoute, private router : Router,private snackBar : MatSnackBar) {
      this.httpService.getAlldepartments((data : any)=>{
          this.departments = data;
      })
  }

  section_id : any = 0;

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
         this.section_id = params.get('data');
         //this.updateCompanyProcess(this.entity_id);
         this.httpService.getsection(this.section_id,(data : any)=>{
             console.log(data);
             this.section = data;
         })
    }

    )
}
 
  // public addCompanyProcess( frm : any): void {
  //   let data = frm.value;
  //   data.companyEntity.entityId = parseInt(data.companyEntity.entityId);
  //   // console.log(data);
  //   this.httpService.adddepartment(data, (data: any[]) => {
      
  //     this.departments = data; 
  //   });
  // }

  public addCompanyProcess(): void {
    console.log(this.section)
    this.httpService.addsection(this.section,(data : any)=>{
        console.log(data);
        if (data && data.success) {
          this.openErrorSnackBar('Error Submitting form');
        } else {
          this.openSuccessSnackBar('Successfully Submitted');
        }
    })
  }

  public onDepartmentSelectionChange(department_id: any) {
    // console.log("Entity selected : "+entityId)
    //let eid = parseInt(department_id);
     this.httpService.getdepartment(department_id,(data : any)=>{
         console.log(data);
         this.section.department = data;
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

