import { Component } from '@angular/core';
import { MainService } from '../../main.service';
import { Role } from 'src/app/commons/common.objects';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rolesfrom',
  templateUrl: './rolesfrom.component.html',
  styleUrls: ['./rolesfrom.component.css'],
})
export class RolesfromComponent {
  roles: any[] = [];
  menus: any[] = [];
  
  role : Role = {
    role_id: 0,
    role_description: '',
    menuGroup: {
      menu_id: 0,
      menuName: '',
      menuGroup: '',
      status: false
    },
    status: false
  }

  constructor(private httpService: MainService,private httpClient : HttpClient,private router:Router,private route : ActivatedRoute,private snackBar : MatSnackBar) {
     this.httpService.getAllmenus((data : any)=>{
        console.log(data);
        this.menus = data;
     })
  }

  receivedData : any = 0;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.receivedData = params.get('data');
      this.httpService.getrole(this.receivedData,(data : any)=>{
          this.role = data;
      })                        
    });
  }

  public onMenuSelectionChange(menu_id : any){
      console.log(menu_id);
      this.httpService.getmenu(menu_id,(data : any)=>{
          console.log(data);
          this.role.menuGroup = data;
      })
  }

  public addRole(): void {
    console.log(this.role)
    this.httpService.addrole(this.role,(data : any)=>{
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
