import { Component, ViewChild } from '@angular/core';
import { MainService } from '../../main.service';
import { Observable } from 'rxjs';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { MyCellComponent } from 'src/app/my-cell/my-cell.component';
import { MyCellSectionComponent } from 'src/app/my-cell-section/my-cell-section.component';

@Component({
  selector: 'app-section-all',
  templateUrl: './section-all.component.html',
  styleUrls: ['./section-all.component.css']
})
export class SectionAllComponent {
  rowData$: Observable<any[]> | undefined;
  colDefs: ColDef[] = [
    {field: 'section_id',sortable: true , filter: true ,editable: true,cellRenderer:MyCellSectionComponent},
    {field: 'section_description',sortable: true , filter: true ,editable: true},
    {headerName:'Department',field: 'department.department_description',sortable: true , filter: true ,editable: true},
  ];

  //httpService: any;
  @ViewChild(AgGridAngular) agGrid! : AgGridAngular;
  

  constructor(private http:HttpClient,private httpService : MainService){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Section");
    console.log(this.rowData$);
  }

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/Section");
  }
   
  onCellClicked( event:CellClickedEvent){
  console.log(event)
  }

  clearSelection(){
  this.agGrid.api.deselectAll();
  }


  sections: any[] = [];
  section: any = {};
  baseUri: string = 'http://localhost:5050/asm';

  viewComponent: string = 'displayall';
  httpClient: any;

  // constructor(private httpService: MainService) {
  //   httpService.getAllsections((data: any[]) => {
  //     this.sections = data;
  //   });
  // }

  public onViewClick(sectionId: number) {
    this.httpService.getsection(sectionId, (data: any) => {
      this.section = data;
    });
    this.viewComponent = 'display';
  }
  public onAddsection(): void {
    this.section = {};
    this.viewComponent = 'add';
  }
  public addCompanyProcess(): void {
    this.httpService.addsection(this.section, (data: any[]) => {
      this.sections = data;
    });

    this.viewComponent = 'displayall';
  }

  public onDeleteClick(sectionId: number) {
    this.httpService.deletesection(sectionId, (data: any[]) => {
      this.sections = data;
    });
    this.viewComponent = 'displayall';
  }

  public onUpdateClick(sectionId: number): void {
    this.httpService.getsection(sectionId, (data: any) => {
      this.section = data;
    });
    this.viewComponent = 'update'; 
  }

  public updateCompanyProcess(sectionId: number): void {
    this.httpService.updatesection(sectionId, this.section, (data: any) => {
      this.sections = data;
    });
    this.viewComponent = 'displayall';
  }
}
