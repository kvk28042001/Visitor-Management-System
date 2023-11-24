import { Component,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from 'src/app/Components/main.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent,ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellEntityComponent } from 'src/app/my-cell-entity/my-cell-entity.component';
@Component({
  selector: 'app-companyentity',
  templateUrl: './companyentity.component.html',
  styleUrls: ['./companyentity.component.css'],
})
export class CompanyEntityComponent {

  rowData$: Observable<any[]> |undefined;
  colDefs:ColDef [] =[
    {field:'entity_id',sortable:true,filter:true,cellRenderer:MyCellEntityComponent},
    {field:'entity_description',sortable:true,filter:true,editable:true},
    {field:'status',sortable:true,filter:true,editable:true}
  ];

  // httpService: any;
  @ViewChild(AgGridAngular) agGrid! : AgGridAngular;

  constructor(private http:HttpClient,private httpService: MainService){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Entity")
  }

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Entity")
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

  // constructor(private httpService: MainService) {
  //   httpService.getAllCompaniesentity((data: any[]) => {
  //     this.companiesentity = data;
  //   });
  // }

  // public onViewClick(id: number) {
  //   this.httpService.getCompanyentity(id, (data: any) => {
  //     this.companyEntity = data;
  //   });
  //   this.viewComponent = 'display';
  // }
  // public onAddCompanyentity(): void {
  //   this.companyEntity = {};
  //   this.viewComponent = 'add';
  // }
  // public addCompanyProcess(): void {
  //   this.httpService.addCompanyentity(this.companyEntity, (data: any[]) => {
  //     this.companiesentity = data;
  //   });

  //   this.viewComponent = 'displayall';
  // }

  // public onDeleteClick(id: number) {
  //   this.httpService.deleteCompanyentity(id, (data: any[]) => {
  //     this.companiesentity = data;
  //   });
  //   this.viewComponent = 'displayall';
  // }

  // public onUpdateClick(id: number): void {
  //   this.httpService.getCompanyentity(id, (data: any) => {
  //     this.companyEntity = data;
  //   });
  //   this.viewComponent = 'update'; 
  // }

  // public updateCompanyProcess(id: number): void {
  //   this.httpService.updateCompanyentity(id, this.companyEntity, (data: any) => {
  //     this.companiesentity = data;
  //   });
  //   this.viewComponent = 'displayall';
  // }
}

