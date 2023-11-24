import { Component } from '@angular/core';
import { login } from 'src/app/commons/common.objects';
import { MainService } from '../main.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {

  login : login = {
    // loginId: 0,
    email: '',
    password: ''
  }

  authenticated : boolean = false;
  userdata : any = 0;
  invalidUser : boolean = false;

  constructor(private httpService : MainService){
    localStorage.clear();
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
    this.httpService.logIn(this.login,(data : any)=>{
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
          localStorage.setItem('username', uid);
          this.httpService.getUserByUserName(this.login.email,(data : any)=>{
              this.userdata = data.user_id;
              if(this.authenticated){
                this.httpService.setData(this.userdata);
              }
          })
          if(this.authenticated){
            this.httpService.setData(true);
          }
          
          //this.router.navigate(["/header",{data : this.user.user_id}]); 
       }
    })
  }


}
