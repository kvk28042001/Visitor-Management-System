import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellEntityComponent } from '../my-cell-entity/my-cell-entity.component';
import { MainService } from '../Components/main.service';
import { MyCellAppointmentComponent } from '../my-cell-appointment/my-cell-appointment.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  rowData$!: Observable<any[]>;
  colDefs:ColDef [] =[
    {field:'appointment_id',sortable:true,filter:true,cellRenderer:MyCellAppointmentComponent},
    {field:'appointment_start',sortable:true,filter:true,editable:true},
    {field:'appointment_end',sortable:true,filter:true,editable:true},
    {field:'appointment_type.appointmentType',sortable:true,filter:true,editable:true}
  ];

  // httpService: any;
  @ViewChild(AgGridAngular) agGrid! : AgGridAngular;

  constructor(private http:HttpClient,private httpService: MainService){}

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Appointment")
  }
  onCellClicked( event:CellClickedEvent){
    console.log(event)
    }
  
    clearSelection(){
    this.agGrid.api.deselectAll();
    }

    public getYetToCheckIn(){
      this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Appointmentyettovisitcount")
    }

    public getCheckedIn(){
      this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/visitor/checkincount")
    }

    public getCheckedOut(){
      this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/visitor/checkoutcount")
    }
}
