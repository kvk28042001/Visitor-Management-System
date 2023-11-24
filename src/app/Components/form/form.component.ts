import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Company } from 'src/app/commons/common.objects';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  company : Company = {
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

  constructor(private httpClient : HttpClient){

  }

  url: any;
  msg = '';
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string="";
  imageName: any;

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

  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:5050/asm/company', uploadImageData, { observe: 'response' })
      .subscribe((response: { status: number; }) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

  public addCompanyProcess(){
     this.httpClient.post('http://localhost:9090/company',this.company)
                    .subscribe((data : any)=>{
                         console.log(data);
                    })
  }

}
