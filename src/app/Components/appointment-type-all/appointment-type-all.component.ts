import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';
import { HttpClient } from '@angular/common/http';
import { MyCellAppointmentComponent } from 'src/app/my-cell-appointment/my-cell-appointment.component';
import { MyCellappointmentTypeComponent } from 'src/app/my-cellappointment-type/my-cellappointment-type.component';

@Component({
  selector: 'app-appointment-type-all',
  templateUrl: './appointment-type-all.component.html',
  styleUrls: ['./appointment-type-all.component.css']
})
export class AppointmentTypeAllComponent {
  rowData$: Observable<any[]> |undefined;
  colDefs:ColDef [] =[
    {field:'appointmentTypeId',sortable:true,filter:true,cellRenderer:MyCellappointmentTypeComponent},
    {field:'appointmentType',sortable:true,filter:true,editable:true}
  ];

  // httpService: any;
  @ViewChild(AgGridAngular) agGrid! : AgGridAngular;

  constructor(private http:HttpClient,private httpService: MainService){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/appointmentType/")
  }

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/appointmentType/")
  }
  onCellClicked( event:CellClickedEvent){
    console.log(event)
    }
  
    clearSelection(){
    this.agGrid.api.deselectAll();
    }
  companiesentity: any[] = [];
  companyEntity: any = {};
  baseUri: string = 'http://localhost:5050/asm';

  viewComponent: string = 'displayall';
  httpClient: any;
}
