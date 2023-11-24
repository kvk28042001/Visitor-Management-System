import { Component, Inject } from '@angular/core';
import { User } from 'src/app/commons/common.objects';
import { MainService } from '../main.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  user : User = {
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
  }

  email : string = '';
   
  constructor(private service : MainService,private snackBar : MatSnackBar,private router : Router) {
    // Access this.data.email to get the email value
    // console.log(this.data.email);
    // this.email = this.data.email;
    // this.service.getUserByUserName(this.data.email,(data : any)=>{
    //     this.user = data;
    // })
  }

  public fetchUserByUserName(username : any){
     this.service.getUserByUserName(username,(data : any)=>{
        this.user = data;
     })
  }

  public onSubmit(){
     this.service.updateUser(this.user.user_id,this.user,(data : any)=>{
        console.log(data);
        if (data && data.success) {
          this.openErrorSnackBar('Error Submitting form');
        } else {
          this.openSuccessSnackBar('Updated Successfully');
          //this.onCloseDialog();
          //this.router.navigate(['/entityform']);
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

  // onCloseDialog(): void {
  //   this.dialogRef.close();
  // }


}
