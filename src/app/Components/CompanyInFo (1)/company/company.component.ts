import { Component } from '@angular/core';

import { MainService } from '../../main.service';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/commons/common.objects';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  companies: any[] = [];
  compan: any = {};
  comp : Company = {
    companyId: 0,
    name: '-',
    address: '-',
    address1: '-',
    address2: '-',
    phoneNo: '-',
    phoneNo1: '-',
    email: '-',
    website: '-',
    logoPath: ''
  }
  company : any = {
    companyId: 0,
    name: '',
    logoimage: '',
    address: '',
    address1: '',
    address2: '',
    phoneNo: '',
    phoneNo1: '',
    email: '',
    website: ''
  }
  viewComponent: string = 'displayall';
  //httpClient: any;
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string="";
  imageName: any;
  idforms : any[] = []; 
  idform : any = {};
  baseUri: string = 'http://localhost:9090/company';
  constructor(private httpClient : HttpClient,private service : MainService,private router:Router,private route : ActivatedRoute,private snackBar : MatSnackBar) {
   
                     
  }

  receivedData : any = 0;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.receivedData = params.get('data');
      this.service.getCompany(this.receivedData,(data : any)=>{
          this.company = data;
      })                        
    });
  }
  id : number = 0;

  // public addCompanyProcess(): void {
  //   this.httpClient.addCompany(this.company, (data: any[]) => {
  //     this.companies = data;
  //   });
  // }
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
    this.httpClient.post(this.service.hostUrl+'/ams/upload', uploadImageData, { observe: 'response' })
      .subscribe((response : any) => {
        if (response.status === 200) {
          this.company.logoimage = response.name;
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

  public getCompanyById(id : number){
    console.log(id);
    this.httpClient.get(this.baseUri+"/"+id)
                    .subscribe((data : any)=>{
                      this.comp= data;
                      this.company = this.comp;
                      console.log(this.comp)
                    })
  }

  public updateCompanyProcess(id : number){
      this.service.addCompany(this.company,(data : any)=>{
          console.log(data);
          if (data && data.success) {
            this.openErrorSnackBar('Error Submitting form');
          } else {
            this.openSuccessSnackBar('Successfully Submitted');
          }
      })
  }

  private openSuccessSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar'],
      verticalPosition: 'top' // Apply the success styles
    });
  }

  private openErrorSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['error-snackbar'],
      verticalPosition: 'top' // Apply the error styles
    });
  }
}