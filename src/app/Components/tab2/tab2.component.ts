import { Component, ElementRef, SecurityContext, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { Appointment, Appointment1, EmailDetails, FacilityVisited, ImageModel, Item, SectionVisited, Vehicle, Visitor, Visitor1 } from 'src/app/commons/common.objects';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../main.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject, takeUntil } from 'rxjs';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component {

  sections : any[] = [];
  facilities : any[] = [];
  appointmentTypes : any[] = [];
  sectionVisitedList : any[] = [];
  facilityVisitedList : any[] = [];

  jwt : any = '';

  otp : any = 0;


  constructor(private httpService: MainService,private router : Router,private http : HttpClient,private sanitizer : DomSanitizer){

    this.jwt = localStorage;
    console.log(this.jwt);
    if(this.jwt == ''){
      this.router.navigate(['/**']);

    }
     
    httpService.getAllSection((data:any)=>{
      this.sections = data;
    })
    httpService.getAllFacility((data: any)=>{
      this.facilities = data;
    })
    httpService.getAllAppointmentType((data : any)=>{
        this.appointmentTypes = data;
    })
    // httpService.getAllUser((data: any)=>{
    //   this.Users = data;
    // })


  }

  onAddSection(section_id : any){
    let id = parseInt(section_id.value);
    console.log(id);
     this.httpService.getSectionById(id,(data : any)=>{
        console.log(data);
        let sectionvisited : SectionVisited = {
          sectionVisited_id: 0,
          section: data,
          sectionCheckIn: '',
          sectionCheckOut: ''
        }
        this.httpService.addSectionVisited(sectionvisited,(data :any)=>{
            this.sectionVisitedList.push(data);
            this.appointment.sectionVisitedList = this.sectionVisitedList;
            console.log(this.sectionVisitedList);
        })
     })
  }

  public onAddAppointmentType(appointmentTypeId : any){
    let id = parseInt(appointmentTypeId.value);
    this.httpService.getAppointmentType(id,(data : any)=>{
       this.appointment.appointment_type = data;
    })
  
  }

  public removeSection(sectionVisited : any){
    this.sectionVisitedList = this.sectionVisitedList.filter(item => item !== sectionVisited);
    this.appointment.sectionVisitedList = this.sectionVisitedList;
    console.log(this.sectionVisitedList);
  }

  public removeAppointmentType(appointmentType : any){
    this.appointment.appointment_type = {
      appointmentTypeId: 0,
      appointmentType: '',
      status: false
    };
  }

  public removeFacility(facilityVisited : any){
    this.facilityVisitedList = this.facilityVisitedList.filter(item => item !== facilityVisited);
    console.log(this.facilityVisitedList);
  }

  onAddFacility(facility_id : any){
    let id = parseInt(facility_id.value);
     console.log(id);
     this.httpService.getFacilityById(id,(data : any)=>{
        console.log(data);
        let facilityVisited : FacilityVisited = {
          facilityVisited_id: 0,
          facility: data,
          facilityCheckIn: '',
          facilityCheckOut: ''
        }
        this.httpService.addFacilityVisited(facilityVisited,(data : any)=>{
           this.facilityVisitedList.push(data);
           this.appointment.facilityVisitedList = this.facilityVisitedList;
           console.log(this.facilityVisitedList);
        })
     })
  }

  numberOfPeople: number = 0;
  visitorsData: Visitor1[] = [];

  addPeopleFields() {
    this.visitorsData = Array.from({ length: this.numberOfPeople }, (_, i) => ({
      visitor_id: 0, // You can set an ID as per your requirement
      visitor_name: '',
      visitor_address: '',
      visitor_email: '',
      visitor_phone1: '',
      visitor_phone2: '',
      visitor_photo: this.image.name,
      visitor_aadhar: this.image1.name,
      items: [] // Initialize items array if needed
    }));
  }

  addItem(visitorIndex: number) {
    this.visitorsData[visitorIndex].items.push({
      item_Name: '',
      item_Description: '',
      item_count: 0,
      item_id: 0
    });
  }

  removeItem(visitorIndex: number, itemIndex: number) {
    this.visitorsData[visitorIndex].items.splice(itemIndex, 1);
  }


  vehicles: Vehicle[] = [];

  numberOfVehicles: number = 0;

  

  addVehicle() {
    this.vehicles = Array.from({ length: this.numberOfVehicles }, (_, i) => ({
      vehicleId: 0,
      vehicleNumber: '',
      vehicleType: '',
      driverLicense: this.image3.name,
      driverName: '',
      driverPhoto: this.image2.name,
      vehicleCopy: this.image4.name
    }));
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  currentDate : any = new Date();

  selectedMatDate!: Date;

  ordinaryDateSelected!: Date;

  visitor : Visitor1 = {
    visitor_id: 0,
    visitor_name: '',
    visitor_address: '',
    visitor_email: '',
    visitor_phone1: '',
    visitor_phone2: '',
    visitor_photo: '',
    visitor_aadhar: '',
    items: []
  };
  
  item : any = {
    item_id: 0,
    item_Name: '',
    item_description: '',
    item_count : 0
  };
  vehicle: Vehicle ={
    vehicleId: 0,
    vehicleNumber: '',
    vehicleType: '',
    driverLicense: '',
    driverName: '',
    driverPhoto: '',
    vehicleCopy: ''
  };


  appointment : Appointment1 = {
    appointment_id: 0,
    appointment_start: '',
    appointment_end: '',
    visitors: [],
    vehicles: [],
    facilityVisitedList: [],
    sectionVisitedList: [],
    checkInTime: '',
    checkOutTime: '',
    appointment_type: {
      appointmentTypeId: 0,
      appointmentType: '',
      status: false
    },
    companyName: '',
    place: '',
    companyPhone: ''
  }

  phone : string = '';

  response: string = '';
  response1 : string = '';
  response2 : string = '';
  response3 : string = '';
  response4 : string = '';
  selectedfile : string = '';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedfile = event.target.files[0];
    // You can do something with the selected file if needed
  }

  image : ImageModel = {
    id: 0,
    name: '',
    type: ''
  }

  image1 : ImageModel = {
    id: 0,
    name: '',
    type: ''
  }

  image2 : ImageModel = {
    id: 0,
    name: '',
    type: ''
  }

  image3 : ImageModel = {
    id: 0,
    name: '',
    type: ''
  }

  image4 : ImageModel = {
    id: 0,
    name: '',
    type: ''
  }

  // public imageUploadVisitor(){

  
  //   const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
  //   const file = fileInput?.files?.[0];

  //   if (!this.selectedfile) {
  //     alert('Please select a file.');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('file', this.selectedfile);

  //   // Replace 'your-upload-url' with the actual URL of your server-side file upload endpoint
  //   this.http.post<any>('http://localhost:9090/ams/upload', formData)
  //            .subscribe(
  //                     (response1) => {
  //                       this.image = response1;
  //                       console.log(this.image);
  //                       this.response = 'File upload success.';
  //                       // Do something with the response from the server, if needed
  //                     },
  //                     (error) => {
  //                       this.response = 'File upload error: ' + error.status;
  //                       // Handle the error, if any
  //                     }
  //                   );
  

  // }



  public getVisitorDetails(){
     this.httpService.fetchVisitorByPhone(this.phone,(data : any)=>{
        this.visitor = data;
        console.log(data);
     })
  }

  imageSrc : any = '';

  imageUploadVisitor(visitorIndex: number) {
    const fileInput = document.querySelector<HTMLInputElement>('#visitorphoto' + visitorIndex);
    const file = fileInput?.files?.[0];

    if (!file) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    // Replace 'your-upload-url' with the actual URL of your server-side file upload endpoint
    this.http.post<any>(this.httpService.hostUrl+'/ams/upload', formData)
      .subscribe(
        (response1) => {
          this.visitorsData[visitorIndex].visitor_photo = response1.name;
          this.response = 'File upload success for ' + this.visitorsData[visitorIndex].visitor_name + '.';
          // Do something with the response from the server, if needed
          this.httpService.getImageFromServer(this.visitorsData[visitorIndex].visitor_photo).subscribe(
            (imageData: ArrayBuffer) => {
              const imageBlob = new Blob([imageData], { type: 'image/jpeg' }); // Change to the appropriate type for your image
              this.imageSrc = URL.createObjectURL(imageBlob);
            },
            (error) => {
              console.error('Error fetching image:', error);
            }
          );
        },
        (error) => {
          this.response = 'File upload error: ' + error.status;
          // Handle the error, if any
        }
      );
  }

  visitor_aadhar : any = '';

  public idUploadVisitor(visitorIndex: number){

    const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
    const file = fileInput?.files?.[0];

    if (!this.selectedfile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedfile);

    // Replace 'your-upload-url' with the actual URL of your server-side file upload endpoint
    this.http.post<any>(this.httpService.hostUrl+'/ams/upload', formData)
             .subscribe(
                      (response1) => {
                        // this.image1 = response1;
                        // console.log(this.image1);
                        // this.response1 = 'File upload success.';
                        this.visitorsData[visitorIndex].visitor_aadhar = response1.name;
                        this.response1 = 'File upload success for ' + this.visitorsData[visitorIndex].visitor_name + '.';
                        // Do something with the response from the server, if needed
                        const filePath = this.visitorsData[visitorIndex].visitor_aadhar;
                        this.httpService.getFile(filePath).subscribe((fileBlob: Blob) => {
                          const file = new Blob([fileBlob], { type: 'application/pdf' });
                          this.visitor_aadhar = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
                        });
                      },
                      (error) => {
                        this.response = 'File upload error: ' + error.status;
                        // Handle the error, if any
                      }
                    );

  }

  downloadPdf(visitorId: SafeResourceUrl, fileName: string): void {
    const url = this.sanitizer.sanitize(SecurityContext.URL, visitorId);
    const link = document.createElement('a');
    link.href = url || '';
    link.target = '_blank';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  imageSrc1 : any= ''


  public imageUploadDriver(vehicleIndex : number){

    const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
    const file = fileInput?.files?.[0];

    if (!this.selectedfile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedfile);

    // Replace 'your-upload-url' with the actual URL of your server-side file upload endpoint
    this.http.post<any>(this.httpService.hostUrl+'/ams/upload', formData)
             .subscribe(
                      (response1) => {
                        // this.image2 = response1;
                        // console.log(this.image2);
                        // this.response2 = 'File upload success.';
                        this.vehicles[vehicleIndex].driverPhoto = response1.name;
                        this.response2 = 'File upload success for ' + this.vehicles[vehicleIndex].driverName + '.';
                        this.httpService.getImageFromServer( this.vehicles[vehicleIndex].driverPhoto).subscribe(
                          (imageData: ArrayBuffer) => {
                            const imageBlob = new Blob([imageData], { type: 'image/jpeg' }); // Change to the appropriate type for your image
                            this.imageSrc1= URL.createObjectURL(imageBlob);
                          },
                          (error) => {
                            console.error('Error fetching image:', error);
                          }
                        );
                        // Do something with the response from the server, if needed
                      },
                      (error) => {
                        this.response = 'File upload error: ' + error.status;
                        // Handle the error, if any
                      }
                    );

  }


  driverLicense : any = '';
 
  public idUploadDriver(vehicleIndex : number){

    const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
    const file = fileInput?.files?.[0];

    if (!this.selectedfile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedfile);

    // Replace 'your-upload-url' with the actual URL of your server-side file upload endpoint
    this.http.post<any>(this.httpService.hostUrl+'/ams/upload', formData)
             .subscribe(
                      (response1) => {
                        // this.image3 = response1;
                        // console.log(this.image3);
                        // this.response3 = 'File upload success.';
                        this.vehicles[vehicleIndex].driverLicense = response1.name;
                        this.response3 = 'File upload success for ' + this.vehicles[vehicleIndex].driverName + '.';
                        // Do something with the response from the server, if needed
                        const filePath = this.vehicles[vehicleIndex].driverLicense;
                        this.httpService.getFile(filePath).subscribe((fileBlob: Blob) => {
                          const file = new Blob([fileBlob], { type: 'application/pdf' });
                          this.driverLicense = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
                        });
                      },
                      (error) => {
                        this.response = 'File upload error: ' + error.status;
                        // Handle the error, if any
                      }
                    );

  }


   vehicleCopy :any = '';

  public copyUploadVehicle(vehicleIndex : number){

    const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
    const file = fileInput?.files?.[0];

    if (!this.selectedfile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedfile);

    // Replace 'your-upload-url' with the actual URL of your server-side file upload endpoint
    this.http.post<any>(this.httpService.hostUrl+'/ams/upload', formData)
             .subscribe(
                      (response1) => {
                        // this.image4 = response1;
                        // console.log(this.image4);
                        // this.response4 = 'File upload success.';
                        this.vehicles[vehicleIndex].vehicleCopy = response1.name;
                        this.response4 = 'File upload success for ' + this.vehicles[vehicleIndex].vehicleType + '.';
                        // Do something with the response from the server, if needed
                        const filePath =  this.vehicles[vehicleIndex].vehicleCopy;
                        this.httpService.getFile(filePath).subscribe((fileBlob: Blob) => {
                          const file = new Blob([fileBlob], { type: 'application/pdf' });
                          this.vehicleCopy = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
                        });
                      },
                      (error) => {
                        this.response = 'File upload error: ' + error.status;
                        // Handle the error, if any
                      }
                    );

  }

  public addVehicles() : Vehicle[]{
    console.log(this.vehicles);
    for(let i = 0;i<this.vehicles.length;i++){
      this.httpService.addVehicle(this.vehicles[i],(data : any)=>{
          this.vehicles1.push(data);
          console.log(this.vehicles1);
         // this.appointment.vehicles = this.vehicles1;
         
      })
    }
    return this.vehicles1; 
  }

  public addVisitors() : Visitor1[]{
    console.log(this.visitorsData);
    for(let i = 0;i<this.visitorsData.length;i++){
      this.httpService.addVisitor(this.visitorsData[i],(data : any)=>{
          this.visitors1.push(data);
          console.log(this.visitors1);
          //this.appointment.visitors =  this.visitors1;
      })
   }
   return this.visitors1;
  }

  vehicles1 : Vehicle[] = [];
  visitors1 : Visitor1[] = [];

  navigateToReceiver(appointment_id : number) {
    this.router.navigate(['/visitorcard', { data: this.appointment.appointment_id }]);
  }

  emailDetails : EmailDetails = {
    mailNo: 0,
    sender: '',
    recipient: '',
    msgBody: '',
    subject: '',
    attachment: ''
  }

  selectedOption : string = '';
  selectedOption1: boolean = false; 
  selectedOption2: boolean = false

  onRadioChange(option: string): void {
     if(option=='option1'){
        this.selectedOption1 = true;
     }
     if(option=='option2'){
        this.selectedOption2 = true;
     }
  }

  private destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  
  @ViewChild('webcam') webcamElement?: ElementRef;
  public showWebcam = true;
  public webcamImage!: WebcamImage;
  public imageHeight: number = 200; // Set your desired height
  public imageWidth: number = 300; // Set your desired width

  public captureImageSubject = new Subject<void>();
  public switchCameraSubject = new Subject<string | boolean>();

  // handleImage(webcamImage: WebcamImage): void {
  //   this.webcamImage = webcamImage;
  // }

  captureImage(): void {
    this.webcamImage = null!;
    this.showWebcam = !this.showWebcam;
    this.captureImageSubject.next();
  }

  captureSwitchCamera(): Observable<string | boolean> {
    return this.switchCameraSubject.asObservable().pipe(takeUntil(this.destroy$));
  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
  
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    return new Blob([ab], { type: mimeString });
  }

  async loadFaceApiModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models');
    await faceapi.loadFaceLandmarkModel('/assets/models');
    await faceapi.loadFaceRecognitionModel('/assets/models');
  }

  async handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;

    // Convert the image data URL to an HTMLImageElement
    const image = new Image();
    image.src = webcamImage.imageAsDataUrl;

    // Detect faces in the image
    const detections = await faceapi.detectAllFaces(image, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();

    // If a face is detected, you can access its coordinates
    if (detections.length > 0) {
      const faceCoordinates = detections[0].detection.box;
      console.log('Face coordinates:', faceCoordinates);

      // Perform additional actions with faceCoordinates if needed
      // For example, you can highlight the face region on the image
      this.highlightFaceRegion(faceCoordinates);
    }
  }

  highlightFaceRegion(faceCoordinates: faceapi.Rect) {
    const canvas = document.getElementById('webcamCanvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
  
    if(context){
        // Clear previous drawings
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw a rectangle around the face
    context.strokeStyle = 'red';
    context.lineWidth = 2;
    context.beginPath();
    context.rect(faceCoordinates.x, faceCoordinates.y, faceCoordinates.width, faceCoordinates.height);
    context.stroke();
    }
  }


  sendImageToServer(visitorIndex : number): void {
    // Send the image to your Spring Boot server using HttpClient
    if (this.webcamImage && this.webcamImage.imageAsDataUrl) {

      const blob = this.dataURItoBlob(this.webcamImage.imageAsDataUrl);
      const formData = new FormData();
      formData.append('file', blob, this.visitorsData[visitorIndex].visitor_name+'.jpg');
      console.log(formData);
      this.http.post<any>(this.httpService.hostUrl+'/ams/upload', formData)
        .subscribe(
          (response) => {
            this.visitorsData[visitorIndex].visitor_photo = response.name;
            this.response = 'File upload success for ' + this.visitorsData[visitorIndex].visitor_name + '.';
            // Do something with the response from the server, if needed
            this.httpService.getImageFromServer(this.visitorsData[visitorIndex].visitor_photo).subscribe(
              (imageData: ArrayBuffer) => {
                const imageBlob = new Blob([imageData], { type: 'image/jpg' }); // Change to the appropriate type for your image
                this.imageSrc = URL.createObjectURL(imageBlob);
              },
              (error) => {
                console.error('Error fetching image:', error);
              }
            );
          },
          (error) => {
            console.error('Error uploading image:', error);
          }
        );
    }
  }


  count : any = 0;

 

  public onSubmit(){
    
    // if(this.vehicles.length != 0){
    //   if(this.addVehicles().length ! = 0){
    //     this.appointment.vehicles = this.addVehicles();
    //     if(this.visitorsData.length != 0){
    //       if(this.addVisitors()){
    //        this.appointment.visitors = this.addVisitors(); 
    //       this.httpService.addAppointment(this.appointment,(data : any)=>{
    //          console.log(data);
    //       })
    //     } 
    //    }
    //   }

    //   else{
    //     this.appointment.vehicles = this.vehicles;
    //     this.appointment.visitors = this.visitorsData;
    //     this.httpService.addAppointment(this.appointment,(data : any)=>{
    //       console.log(data);
    //     })
    //   }
      
    // }

    this.appointment.vehicles = this.vehicles;
    this.appointment.visitors = this.visitorsData;

    console.log(this.otp);
    this.httpService.addAppointment(this.appointment,this.otp,(data : any)=>{
        console.log(data);
        this.appointment = data;
        this.count = this.appointment.visitors.length;
        console.log(this.count);
        for(let i = 0;i<this.count;i++){
          console.log(i);
          this.navigateToReceiver(this.appointment.appointment_id);
        }
                  
        // this.emailDetails.msgBody = JSON.stringify(this.appointment.appointment_id);
        // this.emailDetails.subject = " This is appointment details";
        // for(let i=0;i<this.appointment.visitors.length;i++){
        //   this.emailDetails.recipient = this.appointment.visitors[i].visitor_email;
        //   this.http.post("http://localhost:9090/mail/sendMail",this.emailDetails)
        //            .subscribe((data : any)=>{
        //               console.log("Sent mail")
        //            })
        // }
    })



    
  }



}
