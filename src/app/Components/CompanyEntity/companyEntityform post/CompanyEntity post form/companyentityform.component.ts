import { Component } from '@angular/core';

import { MainService } from 'src/app/Components/main.service';

import { HttpClient } from '@angular/common/http';
import { CompanyEntity, Entity } from 'src/app/commons/common.objects';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-companyentityform',
  templateUrl: './companyentityform.component.html',
  styleUrls: ['./companyentityform.component.css']
})
export class CompanyEntityFormComponent {
  companiesentity : any[] = [];
  companyEntity : any = {};
  entity : Entity = {
    entity_id: 0,
    entity_description: '',
    status: false
  }

  



  viewComponent: string = 'displayall';
 // httpClient: any;
  idforms : any[] =[];
  idform : any ={};

  
  constructor(private httpClient: HttpClient,private service : MainService,private route : ActivatedRoute,private router:Router,private snackBar: MatSnackBar) {
  }


  receivedData : any =0;

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.receivedData = params.get('data');
        this.service.getCompanyentity(this.receivedData,(data : any)=>{
            this.entity = data;
        })                        
      });
  }  



    public addEntityProcess(): void {
        // this.httpClient.post('http://localhost:9090/Entity',this.companyEntity)
        //                 .subscribe((data : any)=>{
        //                     console.log(data);
        //                     this.router.navigate(['/entityall'])
        //                 })
        this.service.addCompanyentity(this.entity,(data : any)=>{
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

