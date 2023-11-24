import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CompanyComponent } from '../Components/CompanyInFo (1)/company/company.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cell',
  template: `
  <i class="fa fa-pencil" (click)="onClick(value)"></i>{{value}}
  <!-- <button (click)="onClick(value) ">update</button>{{value}} -->
  `,
  styles: [
    `.fa-pencil{cursor: pointer;}`
  ]
})
export class MyCellComponent implements OnInit,ICellRendererAngularComp {
  value:any;
  //onUpdateClick: any;
  constructor(private http : HttpClient,private router : Router){
    
  }
  baseUri : string = "http://localhost:9090/visitor"
  //constructor(private company : CompanyComponent){}
  //method: CompanyComponent | undefined ; 
  ngOnInit(): void {
    
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
