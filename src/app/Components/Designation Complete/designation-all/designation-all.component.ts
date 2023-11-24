import { Component, ViewChild } from '@angular/core';
import { MainService } from '../../main.service';
import { Observable } from 'rxjs';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { MyCellComponent } from 'src/app/my-cell/my-cell.component';
import { MyCellDesignationComponent } from 'src/app/my-cell-designation/my-cell-designation.component';

@Component({
  selector: 'app-designation-all',
  templateUrl: './designation-all.component.html',
  styleUrls: ['./designation-all.component.css']
})
export class DesignationAllComponent {
  rowData$: Observable<any[]> | undefined;
  colDefs: ColDef[] = [
    {field: 'designationId',sortable: true , filter: true ,editable: true,cellRenderer: MyCellDesignationComponent},
    {field: 'designation',sortable: true , filter: true ,editable: true},
    
  ];

  //httpService: any;
  @ViewChild(AgGridAngular) agGrid! : AgGridAngular;
  

  constructor(private http:HttpClient,private httpService : MainService){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/designation/");
  }

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/designation/");
  }
   
  onCellClicked( event:CellClickedEvent){
  console.log(event)
  }

  clearSelection(){
  this.agGrid.api.deselectAll();
  }



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  designations: any[] = [];
  designation: any = {};
  baseUri: string = 'http://localhost:5050/asm';

  viewComponent: string = 'displayall';
  httpClient: any;

  // constructor(private httpService: MainService) {
  //   httpService.getAllDesignation((data: any[]) => {
  //     this.designations = data;
  //   });
  // }

  public onViewClick(id: number) {
    this.httpService.getDesignation(id, (data: any) => {
      this.designation = data;
    });
    this.viewComponent = 'display';
  }
  public onAddDesignation(): void {
    this.designation = {};
    this.viewComponent = 'add';
  }
  public addCompanyProcess(): void {
    this.httpService.addDesignation(this.designation, (data: any[]) => {
      this.designations = data;
    });

    this.viewComponent = 'displayall';
  }

  public onDeleteClick(id: number) {
    this.httpService.deleteDesignation(id, (data: any[]) => {
      this.designations = data;
    });
    this.viewComponent = 'displayall';
  }

  public onUpdateClick(id: number): void {
    this.httpService.getDesignation(id, (data: any) => {
      this.designation = data;
    });
    this.viewComponent = 'update'; 
  }

  public updateCompanyProcess(id: number): void {
    this.httpService.updateDesignation(id, this.designation, (data: any) => {
      this.designations = data;
    });
    this.viewComponent = 'displayall';
  }
}
