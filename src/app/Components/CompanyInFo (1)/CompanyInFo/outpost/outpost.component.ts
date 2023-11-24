import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

import { MainService } from 'src/app/Components/main.service';
import { ImagecellrendererComponent } from 'src/app/imagecellrenderer/imagecellrenderer.component';
import { MyCellComponent } from 'src/app/my-cell/my-cell.component';

@Component({
  selector: 'app-outpost',
  templateUrl: './outpost.component.html',
  styleUrls: ['./outpost.component.css'],
})
export class OutpostComponent {

  rowData$: Observable<any[]> | undefined;
  colDefs: ColDef[] = [
    {field: 'companyId',sortable: true , filter: true ,editable: true,cellRenderer:MyCellComponent},
    {field: 'name',sortable: true , filter: true ,editable: true},
    {field: 'logoimage',sortable: true , filter: true ,editable: true},
    {field: 'address',sortable: true , filter: true ,editable: true},
    {field: 'address1',sortable: true , filter: true ,editable: true},
    {field: 'address2',sortable: true , filter: true ,editable: true},
    {field: 'phoneNo',sortable: true , filter: true ,editable: true},
    {field: 'phoneNo1',sortable: true , filter: true ,editable: true},
    {field: 'email',sortable: true , filter: true ,editable: true},
    {field: 'website',sortable: true , filter: true ,editable: true},
    {field: 'logo',sortable: true , filter: true ,editable: true,cellRenderer:ImagecellrendererComponent}
  ];

  //httpService: any;
  @ViewChild(AgGridAngular) agGrid! : AgGridAngular;
  

  constructor(private http:HttpClient,private httpService : MainService){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/company/");
  }

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>(this.httpService.hostUrl+"/company/");
  }
   
  onCellClicked( event:CellClickedEvent){
  console.log(event)
  }

  clearSelection(){
  this.agGrid.api.deselectAll();
  }

  



  companies: any[] = [];
  company: any = {};
  
  viewComponent: string = 'displayall';
  httpClient: any;
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string="";
  imageName: any;

  // constructor(private httpService: MainService) {
  //   httpService.getAllCompanies((data: any[]) => {
  //     this.companies = data;
  //   });
  // }

  // public onViewClick(id: number) {
  //   this.httpService.getCompany(id, (data: any) => {
  //     this.company = data;
  //   });
  //   this.viewComponent = 'display';
  // }
  public onAddCompany(): void {
    this.company = {};
    this.viewComponent = 'add';
  }
  public addCompanyProcess(): void {
    this.httpService.addCompany(this.company, (data: any[]) => {
      this.companies = data;
    });

    this.viewComponent = 'displayall';
  }

  // public onDeleteClick(id: number) {
  //   this.httpService.deleteCompany(id, (data: any[]) => {
  //     this.companies = data;
  //   });
  //   this.viewComponent = 'displayall';
  // }

  // public onUpdateClick(id: number): void {
  //   this.httpService.getCompany(id, (data: any) => {
  //     this.company = data;
  //   });
  //   this.viewComponent = 'update';
  // }

  public updateCompanyProcess(id: number): void {
    this.httpService.updateCompany(id, this.company, (data: any) => {
      this.companies = data;
    });
    this.viewComponent = 'displayall';
  }







  url: any;
  msg = '';

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      this.url = '';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }

   //Gets called when the user clicks on submit to upload the image
   onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:9090/company', uploadImageData, { observe: 'response' })
      .subscribe((response: { status: number; }) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );

}
}
