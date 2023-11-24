import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cellappointment-type',
  template: `
    <p>
    <i class="fa fa-pencil" (click)="navigateToReceiver(value)"></i>{{value}}
    </p>
  `,
  styles: [
  ]
})
export class MyCellappointmentTypeComponent {
  value: any;
  constructor(private http : HttpClient,private router : Router){}
  baseUri : string = "http://localhost:9090/asm"
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
    open('userform')
  }

  navigateToReceiver(id : number) {
    this.router.navigate(['/appointmentType', { data: id }]);
  }


}
