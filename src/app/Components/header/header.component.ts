import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UserformComponent } from '../User complete/User Form/userform.component';
import { MainService } from '../main.service';
import { User } from 'src/app/commons/common.objects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus : boolean = false;

  status : boolean = false;

  public viewCard : boolean = true;
  public left : any;
  name : any = '';

  constructor(private dialog: MatDialog,private service : MainService,private router : Router){}

  userId : any = 0;
  importantId : any = 0;
  receivedData: boolean = false;
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
  
  ngOnInit(): void{
    this.service.data$.subscribe(data => {
      //this.receivedData = data;
      this.userId = data;
      this.importantId = data;
      console.log(this.userId);
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') === null) {
          console.log('Local storage is empty or "userData" is not set');
        } else {
          console.log(this.receivedData);
          this.receivedData = true;
          console.log('Local storage is not empty, and "userData" is set');
        }
      this.service.getUserById(data,(dt : any)=>{
          this.user = dt;
          console.log(this.user);
          this.name = this.user.user_email[0];
          console.log(this.name);
      })
      
      
    });
  }


  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      height:'500px' // Set the desired width for the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openEditDialog(): void {
    const numberToSend: number = this.importantId;
    console.log(this.user.user_id);
    const dialogRef = this.dialog.open(UserformComponent, {
      width: '500px',
      height:'500px', // Set the desired width for the dialog
      data: this.user.user_id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openActiveDialog(): void {
    const dialogRef = this.dialog.open(UserformComponent, {
      width: '500px',
      height:'500px' // Set the desired width for the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public onImageHover(evt : MouseEvent){
    this.left = evt.clientX+"px";
    this.viewCard = false;
    console.log(this.left+"px")
    // console.log(this.visitors);
    //this.fetchAndDisplayImage(this.visitors.visitor_photo);
    // console.log(companies.name);
    // if(evt.clientX > 1000)
    // {
    //   this.left = this.left - 10;
    // }
  }

  onMouseLeave() {
    // Code to execute when the mouse leaves the element
    console.log('Mouse left!');
  }

  onLogout(){
    localStorage.clear();
    this.receivedData = !this.receivedData;
    this.router.navigate(['/**']);
  }



}
