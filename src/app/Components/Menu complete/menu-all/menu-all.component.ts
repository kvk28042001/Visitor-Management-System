import { Component, ViewChild } from '@angular/core';
import { MainService } from '../../main.service';
import { Observable } from 'rxjs';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { MyCellComponent } from 'src/app/my-cell/my-cell.component';
import { MyCellMenuComponent } from 'src/app/my-cell-menu/my-cell-menu.component';

@Component({
  selector: 'app-menu-all',
  templateUrl: './menu-all.component.html',
  styleUrls: ['./menu-all.component.css']
})
export class MenuAllComponent {
  // rowData$: Observable<any[]> | undefined;
  // colDefs: ColDef[] = [
  //   {field: 'ID',sortable: true , filter: true ,editable: true,cellRenderer:MyCellMenuComponent},
  //   {field: 'Menu Name',sortable: true , filter: true ,editable: true},
  //   {field: 'Menu Group',sortable: true , filter: true ,editable: true},
  // ];
  // httpService: any;
  // @ViewChild(AgGridAngular) agGrid! : AgGridAngular;
  // constructor(private http:HttpClient){}

  // ngOnInit(){
  //   this.rowData$ = this.http.get<any[]>("http://localhost:9090/visitor/menu");
    
  // }
   
  // onCellClicked( event:CellClickedEvent){
  // console.log(event)
  // }

  // clearSelection(){
  // this.agGrid.api.deselectAll();
  // }
 
  // menus: any[] = [];
  // menu: any = {};


 

  constructor(private http : HttpClient,private httpService : MainService){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/menu")
  }

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/menu")
    console.log(this.rowData$);
  }

  rowData$: Observable<any[]> | undefined;
  colDefs: ColDef[] = [
    {field: 'menu_id',sortable: true , filter: true ,editable: true,cellRenderer:MyCellMenuComponent},
    {field: 'menuName',sortable: true , filter: true ,editable: true}, 
    {field: 'menuGroup',sortable: true , filter: true ,editable: true},
  ];
}
