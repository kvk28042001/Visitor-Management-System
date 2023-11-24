import { animate, style, transition } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cardimage',
  templateUrl: './cardimage.component.html',
  styleUrls: ['./cardimage.component.css']
})
export class CardimageComponent{

  // @Input("profile") profile! : any;
  // @Input("profiles") profiles! : any;
  // @Input("companies") companies! : any;
  @Input("visitors") visitors! : any;
  public viewCard : boolean = true;
  public left : any;
  imageSrc : string = '';
  cleanedString : string = '';
  visitorss : any[] = [];
  image : string = '';
  i : number = 0;


  constructor(private service : MainService,private httpClient : HttpClient){
        // this.httpClient.get("http://localhost:9090/Visitor")
        //                .subscribe((data : any)=>{
        //                   this.visitorss = data;
        //                   //this.visitors = data;
        //                   for(this.i = 0;this.i<this.visitors.length;this.i++){
        //                     this.image = this.visitors[this.i].visitor_image;
        //                     this.fetchAndDisplayImage(this.image);
        //                }
        //                })  
        //this.fetchAndDisplayImage(this.visitors.visitor_image);
  }


  ngOnInit() {
    // Fetch and display image when the component is initialized
    this.fetchAndDisplayImage(this.visitors.visitor_photo);
  }



  public onImageHover(evt : MouseEvent){
    this.left = evt.clientX+"px";
    this.viewCard = false;
    console.log(this.left+"px")
    console.log(this.visitors);
    //this.fetchAndDisplayImage(this.visitors.visitor_photo);
    // console.log(companies.name);
    // if(evt.clientX > 1000)
    // {
    //   this.left = this.left - 10;
    // }
  }

  
  fetchAndDisplayImage(imageUrl : string) {
    this.cleanedString = imageUrl.replace("D:\\","").trim();
    this.service.getImageFromServer(this.cleanedString).subscribe(
      (imageData: ArrayBuffer) => {
        const imageBlob = new Blob([imageData], { type: 'image/jpeg' }); // Change to the appropriate type for your image
        this.imageSrc = URL.createObjectURL(imageBlob);
      },
      (error) => {
        console.error('Error fetching image:', error);
      }
    );
  }

}
