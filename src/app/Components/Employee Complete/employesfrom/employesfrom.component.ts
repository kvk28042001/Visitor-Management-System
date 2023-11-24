import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/commons/common.objects';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employesfrom',
  templateUrl: './employesfrom.component.html',
  styleUrls: ['./employesfrom.component.css'],
})
export class EmployesfromComponent {
  employees: any[] = [];
  // DepartmentList :any;
  // selectedValue:any;

  // employee: any = {};
  
  departments: any[] = [];
  sections: any[] = [];
  designations: any[] = [];
  Companiesentity: any[] = [];
  entities : any[] = [];
  employee: any = {
    employeeId: 0,
    employeeName: '',
    companyEntity: {
      entity_id: 0,
      entity_description: '',
      status: false
    },
    designation: {
      designationId: 0,
      designation: '',
      status: false
    },
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
    section: {
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
    },
    status: false,
    employeeEmail: '',
    hostActiveStatus : false
  }

  // ngOnInit(): void {
  //   this.httpService.getDepList().subscribe((data:any)=>{
  //     this.DepartmentList=data;
  //   })
  // }

  // ChangeDepartment(e:any){
  //   console.log(e.target.value)
  //   this.employee=e.target.value;
  // }

  constructor(private httpService: MainService,private httpClient : HttpClient,private route : ActivatedRoute,private router:Router,private snackBar : MatSnackBar) {
    // this.httpClient.get("http://localhost:9090/Entity")
    //                  .subscribe((data : any)=>{
    //                      this.entities = data;
    //                      console.log(this.entities);
    //                  })

    //   this.httpClient.get("http://localhost:9090/Department")
    //                  .subscribe((data : any)=>{
    //                       this.departments = data;
    //                  })               

    //   this.httpClient.get("http://localhost:9090/designation/")
    //                  .subscribe((data : any)=>{
    //                       this.designations = data;
    //                  })               

    //   this.httpClient.get("http://localhost:9090/Section")
    //                  .subscribe((data : any)=>{
    //                       this.sections = data;
    //                  })             
    this.httpService.getAllCompaniesentity((data : any)=>{
        this.entities = data;
    }) 

    this.httpService.getAlldepartments((data : any)=>{
         this.departments = data;
    })

    this.httpService.getAllsections((data : any)=>{
          this.sections = data;
    })

    this.httpService.getAllDesignation((data : any)=>{
           this.designations = data;
    })
  }

  employeeId : any = 0;

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
         this.employeeId = params.get('data');
         //this.updateCompanyProcess(this.entity_id);
          this.httpService.getemployee(this.employeeId,(data : any)=>{
              this.employee = data;
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

 

  public onEntitySelectionChange(entityId : any){
    // console.log("Entity selected : "+entityId)
    console.log(entityId);
    this.httpService.getDepartmentByEntity(entityId,(data : any)=>{
      this.departments=data;
      
      this.httpService.getCompanyentity(entityId,(data:any)=>{
      //   this.employee.companyEntity=data;
      //   console.log('this.employee.companyEntity')
      // console.log(this.employee.companyEntity)
      })
    })
  }
  public onDesignationSelectionChange(designationId : any){
    // console.log("Entity selected : "+entityId)
    console.log(designationId);
    this.httpService.getDesignation(designationId,(data : any)=>{
       this.employee.designation = data;
       console.log(this.employee.designation)
      
     
    })

  }
  public onDepartmentSelectionChange(departmentId : any){
    console.log(departmentId);
    this.httpService.getdepartment(departmentId,(data : any)=>{
        console.log(data);
        //this.employee.department = data;
        this.httpService.getSectionByDepartment(departmentId,(data : any)=>{
          console.log(data);
          this.sections=data;
          // this.httpService.getdepartment(departmentId,(data : any)=>{
          //   this.employee.department = data;
          // console.log(this.employee.department)
  
         //})
      })
    })
   
       
  }

  public onSectionSelectionChange(sectionId : any){
    console.log(sectionId);
    this.httpService.getsection(sectionId,(response : any)=>{
       console.log(response);
       this.employee.section = response;
       console.log("this.employee.section")

      //  this.employee.department.department_id = this.employee.section.department.department_id;

      //  this.employee.companyEntity.entity_id = this.employee.section.department.entity.entity_id;

      //  console.log(this.employee.section)

    })
  }

  public addCompanyProcess(frm: any): void {
    console.log(this.employee)
    

    // this.httpClient.post("http://localhost:9090/employee",this.employee)
    //                .subscribe((data : any)=>{
    //                 this.router.navigate(['/employeeall'])
    //                     console.log(data);
    //                })
    this.httpService.addemployee(this.employee,(data : any)=>{
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
