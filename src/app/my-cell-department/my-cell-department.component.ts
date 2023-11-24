import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cell-department',
  template: `
  <i class="fa fa-pencil" (click)="navigateToReceiver(value)"></i>{{value}}
  <!-- <button (click)="onClick(value) ">update</button>{{value}} -->
  `,
  styles: [
    `.fa-pencil{cursor: pointer;}`
  ]
})
export class MyCellDepartmentComponent implements OnInit,ICellRendererAngularComp {
  value: any;
  constructor(private http : HttpClient,private router : Router){
    
  }
  baseUri : string = "http://localhost:5050/asm"
  ngOnInit(): void {
  }
  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  onClick(id : number){
    alert('cell value is'+ this.value),
    alert('please add the cell value in id'),
    this.http.post(this.baseUri+"/idform",id)
             .subscribe((data : any)=>{
                 console.log(data);
             })
    open('departmentform')
  }


  navigateToReceiver(id : number) {
    this.router.navigate(['/departmentform', { data: id }]);
  }

}
