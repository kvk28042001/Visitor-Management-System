import { Component,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent,ColDef } from 'ag-grid-community';
import { MainService } from '../../main.service';
import { Observable } from 'rxjs';
import { MyCellComponent } from 'src/app/my-cell/my-cell.component';
import { MyCellDepartmentComponent } from 'src/app/my-cell-department/my-cell-department.component';

@Component({
  selector: 'app-departmentall',
  templateUrl: './departmentall.component.html',
  styleUrls: ['./departmentall.component.css']
})
export class DepartmentallComponent {
  

  rowData$: Observable<any[]> | undefined;
  colDefs: ColDef[] = [
    {field: 'department_id',sortable: true , filter: true ,editable: true,cellRenderer:MyCellDepartmentComponent},
    {field: 'department_description',sortable: true , filter: true ,editable: true},
    {headerName:'Entity',field: 'entity.entity_description',sortable: true , filter: true ,editable: true},
    {field: 'status',sortable: true , filter: true ,editable: true},
  ];
  //httpService: any;
  @ViewChild(AgGridAngular) agGrid! : AgGridAngular;
  

  constructor(private http:HttpClient,private httpService : MainService){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Department");
  }

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Department");
  }
   
  onCellClicked( event:CellClickedEvent){
  console.log(event)
  }

  clearSelection(){
  this.agGrid.api.deselectAll();
  }

  


  departments: any[] = [];
  department: any = {};
  companyEntity: any ={};
  
  Companiesentity: any[] = [];
  
  viewComponent: string = 'displayall';
  httpClient: any;

}
