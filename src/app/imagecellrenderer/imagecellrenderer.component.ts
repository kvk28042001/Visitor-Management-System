import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CompanyComponent } from '../Components/CompanyInFo (1)/company/company.component';
import { Router } from '@angular/router';
import { MainService } from '../Components/main.service';

@Component({
  selector: 'app-my-cell',
  template: `
  <img class="round" [src]="imageSrc" alt="user" style="height : 50%;width : 50%" />
  `,
  styles: [
    `.fa-pencil{cursor: pointer;}`
  ]
})
export class ImagecellrendererComponent implements OnInit,ICellRendererAngularComp {
  value:any;
  //onUpdateClick: any;
  constructor(private http : HttpClient,private service : MainService,private router : Router){
    
  }

  imageSrc : any = '';
  baseUri : string = "http://localhost:9090/visitor"
  //constructor(private company : CompanyComponent){}
  //method: CompanyComponent | undefined ; 
  ngOnInit(): void {
     this.service.getAllCompanies((data : any)=>{
      this.service.getImageFromServer(data[0].logoimage).subscribe(
        (imageData: ArrayBuffer) => {
          const imageBlob = new Blob([imageData], { type: 'image/jpeg' }); // Change to the appropriate type for your image
          this.imageSrc = URL.createObjectURL(imageBlob);
          console.log("image");
        },
        (error) => {
          console.error('Error fetching image:', error);
        }
      );
     })
  }

  // onUpdateClick(rowData: any) {
  //   // Navigate to the form component and pass the row data as a parameter
  //   this.router.navigate(['/form', { data: JSON.stringify(rowData) }]);
  // }

  agInit(params: ICellRendererParams): void {
     this.value = params.value;
  }
  refresh(params: ICellRendererParams): boolean {
     return false;
  }
  onClick(id : number){
    alert('cell value is'+ this.value),
    alert('please add the cell value in id'),
    //this.method?.getCompanyById(this.value),
    //this.company.getCompanyById(id);
    this.router.navigate(['/companyForm', { data: id }]);
  }

  // public onClick() {
  //   this.onUpdateClick.emit(this.rowData);
  // }
  

}
