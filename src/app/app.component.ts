import { Component, OnInit } from '@angular/core';
import { MainService } from './Components/main.service';
import { login } from './commons/common.objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Intern';
  logs: string[] = [];
  userId: any;
  importantId: any;
  user: any;
  name: any;
  valid : boolean = false;

  constructor(private service : MainService){}

  ngOnInit(){
     //this.service.navigateToDesiredPage();
     this.getLogData();
     this.service.data$.subscribe(data => {
      //this.receivedData = data;
      this.userId = data;
      this.importantId = data;
      console.log(this.userId);
      if(this.userId!=0){
        if (localStorage.getItem('userData') === null) {
          this.valid = true;
          console.log(this.valid);
          console.log('Local storage is empty or "userData" is not set');
        } else {
          console.log('Local storage is not empty, and "userData" is set');
        }
      }
      this.service.getUserById(data,(dt : any)=>{
          this.user = dt;
          console.log(this.user);
          this.name = this.user.user_email[0];
          console.log(this.name);
      })
      
      
    });
  }
  receivedData(receivedData: any) {
    throw new Error('Method not implemented.');
  }

  getLogData() {
    this.service.getLogs().subscribe(
      (data) => {
        this.logs = data;
      },
      (error) => {
        console.error('Error fetching logs:', error);
      }
    );
  }

  // userId : any = 0;
  // receivedData: boolean = false;
  
  // constructor(private service : MainService){

  // }

  // ngOnInit(): void{
  //   this.service.data$.subscribe(data => {
  //     //this.receivedData = data;
  //     this.userId = data;
  //     console.log(this.userId);
  //     if(this.userId!=0){
  //       console.log(this.receivedData);
  //       this.receivedData = true;
  //     }
      
  //   });
  // }

  

  
}
