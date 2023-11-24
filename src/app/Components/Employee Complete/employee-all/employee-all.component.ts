import { Component, ViewChild } from '@angular/core';
import { MainService } from '../../main.service';
import { Observable } from 'rxjs';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { MyCellComponent } from 'src/app/my-cell/my-cell.component';
import { MyCellEmployeeComponent } from 'src/app/my-cell-employee/my-cell-employee.component';

@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.css']
})
export class EmployeeAllComponent {
  rowData$: Observable<any[]> | undefined;
  colDefs: ColDef[] = [
    {field: 'employeeId',sortable: true , filter: true ,editable: true,cellRenderer:MyCellEmployeeComponent},
    {field: 'employeeName',sortable: true , filter: true ,editable: true},
    {headerName:'Entity',field:'companyEntity.entity_description',sortable:true,filter:true,editable:true},
    {headerName:'Department',field:'department.department_description',sortable:true,filter:true,editable:true},
    {headerName:'Section',field:'section.section_description',sortable:true,filter:true,editable:true},
    {headerName:'Designation',field:'designation.designation',sortable:true,filter:true,editable:true},
    {headerName:'Active Status',field:'hostActiveStatus',sortable:true,filter:true,editable:true}
  ];

  //httpService: any;
  @ViewChild(AgGridAngular) agGrid! : AgGridAngular;
  

  constructor(private http:HttpClient,private httpService : MainService){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/employee");
  }

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/employee");
  }
   
  onCellClicked( event:CellClickedEvent){
  console.log(event)
  }

  clearSelection(){
  this.agGrid.api.deselectAll();
  }













  employees: any[] = [];
  employee: any = {};
  baseUri: string = 'http://localhost:5050/asm';
  departments: any[] = [];
  sections: any[] = [];
  designations: any[] = [];
  Companiesentity: any[] = [];
  viewComponent: string = 'displayall';
  httpClient: any;

  // constructor(private httpService: MainService) {
  //   httpService.getAllDesignation((data: any[]) => {
  //     this.designations = data;
  //   });
  //   httpService.getAllCompaniesentity((data: any[]) => {
  //     this.Companiesentity = data;
  //   });
  // }

  public onViewClick(employeeId: number) {
    this.httpService.getemployee(employeeId, (data: any) => {
      // console.log(JSON.stringify(data));
      this.employee = data;
    });
    this.viewComponent = 'display';
  }
  public onAddemployee(): void {
    this.employee = {};
    this.viewComponent = 'add';
  }
  // public addCompanyProcess(): void {
  //   this.httpService.addemployee(this.employee, (data: any[]) => {
  //     this.employees = data;
  //   });

  //   this.viewComponent = 'displayall';
  // }

  public addCompanyProcess(frm : any): void {

    console.log(frm.value)
  
    this.httpService.addemployee(this.employee, (data: any[]) => {
      this.employees = data;
      // console.log(data.values);
    });
    
  }
  

  public onEntitySelectionChange(entityId : string){
    // console.log("Entity selected : "+entityId)
    let eid = parseInt(entityId)
    this.httpService.getDepartmentByEntity(eid,(data : any)=>{
      this.departments = data;
    })
  }


  public onDepartmentSelectionChange(departmentId : string){
    // console.log("Entity selected : "+entityId)
    let eid = parseInt(departmentId)
    this.httpService.getSectionByDepartment(eid,(data : any)=>{
      this.sections = data;
    })
  }


  public onDeleteClick(employeeId: number) {
    this.httpService.deleteemployee(employeeId, (data: any[]) => {
      this.employees = data;
    });
    this.viewComponent = 'displayall';
  }

  public onUpdateClick(employeeId: number): void {
    this.httpService.getemployee(employeeId, (data: any) => {
      this.employee = data;
    });
    this.viewComponent = 'update'; 
  }

  public updateCompanyProcess(employeeId: number): void {
    this.httpService.updateemployee(employeeId, this.employee, (data: any) => {
      this.employees = data;
    });
    this.viewComponent = 'displayall';
  }
}
