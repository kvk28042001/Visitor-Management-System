import { Component, OnInit } from '@angular/core';
import { MainService } from '../Components/main.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmailDetails, Login, User, login } from '../commons/common.objects';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserformComponent } from '../Components/User complete/User Form/userform.component';
import { ForgotpasswordComponent } from '../Components/forgotpassword/forgotpassword.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public invalidUser : boolean = false;
 
  login : login = {
    // loginId: 0,
    email: '',
    password: ''
  }

  


  user:User={
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
  userdata: any=0
 
  authenticated: boolean=false;
  

  public constructor(private service : MainService, private httpClient : HttpClient,private router : Router, public dialogRef: MatDialogRef<LoginComponent>,private dialog: MatDialog,private snackBar : MatSnackBar){}
  ngOnInit(): void {
    localStorage.clear();
  }
  
  public addLogin(){
    this.service.addLogin(this.login, (data : any)=>{
                 console.log(data);
    })
 }

 openDialog() {
  this.dialog.open(UserformComponent, {
    data: {
      
    },
  });
}

login1 : Login = {
  loginId: 0,
  clientIP: '',
  user: {
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
}


 public onLogin(uid : string, pwd : string){
  console.log(uid, " " , pwd);
  this.login.email = uid;
  this.login.password = pwd;
  console.log(uid, "2 " , pwd);
  // this.service.getUserByUserName(uid,(data : any)=>{
  //    console.log(data);
  //    this.user = data;
  // })
  console.log(this.login);
  this.service.logIn(this.login,(data : any)=>{
     this.userdata = data;
     console.log(uid, "3 " , pwd);
     if(this.userdata.length == 0){
        this.invalidUser = true;
     }
     else{
        this.authenticated = true;
        console.log(JSON.stringify(this.userdata));

        const jsonString = JSON.stringify(this.userdata);

          // Parse the JSON string to an object
          const jsonObject = JSON.parse(jsonString);

          // Access the "jwtToken" property
          const jwtToken = jsonObject.jwtToken;

          console.log(jwtToken);
          
        
        localStorage.setItem('token', jwtToken);
        console.log(localStorage.getItem);
        //localStorage.setItem('username', uid);
        this.service.getUserByUserName(this.login.email,(data : any)=>{
            this.userdata = data.user_id;
            console.log(data.user_id);
            this.user = data;
            if(this.authenticated){
              this.service.setData(data.user_id);
              this.dialogRef.close();
              this.service.getClientIP().subscribe((data: string) => {
                this.login1.clientIP = data;
                this.login1.user = this.user; // Assign the response to a property
                this.service.addLogin(this.login1,(data : any)=>{
                   console.log(data);
                   //this.service.setData(true);
                   this.userdata = data.user_id;
                    console.log(data.user_id);

                    // Store user_id in localStorage
                    localStorage.setItem('user_id', data.user_id);
                   this.dialogRef.close();
                   //this.router.navigate(['/home',{data : this.user.user_id}]);
                })
              });
            }
        })
        if(this.authenticated){
          this.service.setData(true);
          this.dialogRef.close();
        }
        
        //this.router.navigate(["/header",{data : this.user.user_id}]); 
     }
  })
}

emailDetails : EmailDetails = {
  mailNo: 0,
  sender: '',
  recipient: '',
  msgBody: '',
  subject: '',
  attachment: ''
}

private secretKey = this.login.email + " Important mail  " ;

public forgotPassword(){
  //const token = jwt.sign({ email: this.login.email }, this.secretKey, { expiresIn: '5m' });
   this.emailDetails.recipient = this.login.email;
   this.emailDetails.subject = "Reset Password Mail";
   this.emailDetails.msgBody = " Reset Password By Clicking on this link :  "  + "http://localhost:4200/forgotpassword";
   this.httpClient.post(this.service.hostUrl+"/mail/sendMail",this.emailDetails)
                    .subscribe(
                      (data: any) => {
                        // Success callback
                        //callback(data);
                        //alert("Successfully Submitted");
                      },
                      (error) => {
                        // Error callback
                        console.error('An error occurred:', error);
                        if(error.status=='200'){
                          this.openSuccessSnackBar('Pls Check Mail To Reset Password');
                        }else{
                          this.openErrorSnackBar('Error Submitting form');
                        }
                        //alert("Error Submitting form");
                        // You can handle the error here, for example, show a user-friendly message
                      });
}

private openSuccessSnackBar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 6000,
    panelClass: ['success-snackbar'],
    verticalPosition: 'top' // Apply the success styles
  });
}

private openErrorSnackBar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 6000,
    panelClass: ['error-snackbar'],
    verticalPosition: 'top' // Apply the error styles
  });
}
  


onCloseDialog(): void {
  this.dialogRef.close();
}

onLog(): void {
  // Add your login logic here
  // Close the dialog when the login is successful
  this.dialogRef.close();
}

}
