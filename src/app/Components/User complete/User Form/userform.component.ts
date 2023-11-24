import { Component, Inject } from '@angular/core';
import { MainService } from '../../main.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/commons/common.objects';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HeaderComponent } from '../../header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent {
  users: any[] = [];
  roles: any[] = [];
  sections: any[] = [];
  user: User = {
    user_id: 0,
    user_Username: '',
    user_email: '',
    user_phone1: '',
    user_phone2: '',
    user_password: '',
    role: {
      role_id: 0,
      role_description: '',
      menuGroup: {
        menu_id: 0,
        menuName: '',
        menuGroup: '',
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
    status: false
  };
  //httpClient: any;
  baseUri: string = 'http://localhost:5050/asm';
  userId : any = 0;
  

  constructor(private httpService: MainService,private httpClient : HttpClient, private router : Router,@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<LoginComponent>,private snackBar : MatSnackBar) {
    this.userId = data;
    console.log(this.userId);
    this.httpService.getUserById(this.userId,(data : any)=>{
       this.user = data;
       console.log(this.user);
    })

    this.httpService.getAllroles((data : any)=>{
       this.roles = data;
    })         

    this.httpService.getAllsections((data : any)=>{
       this.sections = data;
    })
               
  }

  public addCompanyProcess(): void {
     this.httpService.adduser(this.user,(data : any)=>{
        console.log(data);
        if (data && data.success) {
          this.openErrorSnackBar('Error Submitting form');
        } else {
          this.openSuccessSnackBar('Successfully Submitted');
        }
        if(data.user_id!=0){
          this.onCloseDialog();
        }
     })
  }

  public onRoleSelectionChange(role_id:number) {
    // console.log("Entity selected : "+entityId)
    //let eid = parseInt(departmentId);
     this.httpService.getrole(role_id,(data : any)=>{
        this.user.role = data;
     })
  }

  public onSectionSelectionChange(section_id:number) {
    // console.log("Entity selected : "+entityId)
    //let eid = parseInt(departmentId);
     this.httpService.getsection(section_id,(data : any)=>{
        this.user.section = data;
     })
  }

  onCloseDialog(): void {
    this.dialogRef.close();
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
