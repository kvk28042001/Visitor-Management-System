import { Component } from '@angular/core';
import { MainService } from '../Components/main.service';



@Component({
  selector: 'app-unapprovedusers',
  templateUrl: './unapprovedusers.component.html',
  styleUrls: ['./unapprovedusers.component.css']
})
export class UnapprovedusersComponent {

  users : any[] = [];

  constructor(private service : MainService){
    this.service.getAllUnApprovedUsers((data : any)=>{
        this.users = data;
    })
  }

 
   public approveUser(userId : any){
     this.service.updateUnApprovedUser(userId,(data : any)=>{
        console.log(data);
        if(data.user_id!=0){
           alert("Successfully Updated");
        }
     })
   }
}
