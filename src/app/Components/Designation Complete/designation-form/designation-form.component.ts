import { Component } from '@angular/core';
import { MainService } from '../../main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-designation-form',
  templateUrl: './designation-form.component.html',
  styleUrls: ['./designation-form.component.css']
})
export class DesignationFormComponent {
  designations: any[] = [];
  designation: any = {};
  viewComponent: string = 'displayall';
  httpClient: any;

  baseUri: string = 'http://localhost:5050/asm';
  constructor(private httpService: MainService, private router : Router,private route : ActivatedRoute,private snackBar : MatSnackBar) {
    
  }

  receivedData : any = 0;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.receivedData = params.get('data');
      this.httpService.getDesignation(this.receivedData,(data : any)=>{
          this.designation = data;
      })                        
    });
  }

  public addCompanyProcess(): void {
    this.httpService.addDesignation(this.designation, (data: any) => {
      if (data && data.success) {
        this.openErrorSnackBar('Error Submitting form');
      } else {
        this.openSuccessSnackBar('Successfully Submitted');
      }
      this.router.navigate(['/designationall'])
      this.designations = data;
    });
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
