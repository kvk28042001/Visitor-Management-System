import { Component, ViewChild } from '@angular/core';
// import { AgGridAngular } from 'ag-grid-angular/public-api';
import { MainService } from '../main.service';
import { HttpClient } from '@angular/common/http';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellFacilityComponent } from 'src/app/my-cell-facility/my-cell-facility.component';
import { AgGridAngular } from 'ag-grid-angular';
// import {  } from '@ag-grid-angular/*';

@Component({
  selector: 'app-facilityall',
  templateUrl: './facilityall.component.html',
  styleUrls: ['./facilityall.component.css']
})
export class FacilityallComponent {
  rowData$: Observable<any[]> | undefined;
  colDefs: ColDef[] = [
    {field: 'facility_id',sortable: true , filter: true ,editable: true,cellRenderer:MyCellFacilityComponent},
    {field: 'facility_description',sortable: true , filter: true ,editable: true},
    
  ];

  //httpService: any;
  @ViewChild(AgGridAngular) agGrid! : AgGridAngular;
  

  constructor(private http:HttpClient,private httpService : MainService){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Facility");
  }

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Facility");
  }
   
  onCellClicked( event:CellClickedEvent){
  console.log(event)
  }

  clearSelection(){
  this.agGrid.api.deselectAll();
  }


 
}

