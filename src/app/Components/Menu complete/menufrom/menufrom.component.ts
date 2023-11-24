import { Component } from '@angular/core';
import { MainService } from '../../main.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menufrom',
  templateUrl: './menufrom.component.html',
  styleUrls: ['./menufrom.component.css']
})
export class MenufromComponent {

  menus: any[] = [];
  menu: any = {};
 
  
  constructor(private httpService: MainService,private http : HttpClient, private router : Router,private route : ActivatedRoute,private snackBar : MatSnackBar) {
    // httpService.getAllmenus((data: any[]) => {
    //   this.menus = data;
    // });
  }

  receivedData : any = 0;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.receivedData = params.get('data');
      this.httpService.getmenu(this.receivedData,(data : any)=>{
          this.menu = data;
      })                        
    });
  }

  public addCompanyProcess(): void {
     this.httpService.addmenu(this.menu,(data : any)=>{
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
