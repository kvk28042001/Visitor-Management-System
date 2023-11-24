import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entity } from 'src/app/commons/common.objects';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {

  companiesentity : any[] = [];
  companyEntity : any = {};
  entity : Entity = {
    entity_id: 0,
    entity_description: '',
    status: false
  }

  constructor(private httpClient : HttpClient,private route : ActivatedRoute){

  }

  entity_id : any = '';

  ngOnInit(){
      this.route.paramMap.subscribe(params =>{
           this.entity_id = params.get('data');
           //this.updateCompanyProcess(this.entity_id);
           this.httpClient.get("http://localhost:9090/Entity/"+this.entity_id)
                          .subscribe((data : any)=>{
                              this.entity = data;
                          })
      }

      )
  }

  
 public updateCompanyProcess(){
  //console.log(id);
 //  if(this.companyEntity.entity_id == 0){
 //     this.httpClient.post('http://localhost:9090/Entity/',this.companyEntity)
 //                    .subscribe((data : any)=>{
 //                        console.log(data);
 //                    })
 //  }

   //console.log(this.companyEntity.entity_id);

  //  this.httpClient.get("http://localhost:9090/Entity/"+this.entity_id)
  //                 .subscribe((data : any)=>{
  //                      this.entity = data;
  //                      this.httpClient.put('http://localhost:9090/Entity/'+this.entity.entity_id,this.companyEntity)
  //                                      .subscribe((data:any)=>{
  //                                          console.log(data);
  //                                       //      this.httpClient.get(this.baseUri)
  //                                       //      .subscribe((response:any)=>{
  //                                       //        this.companiesentity = response;
  //                                       //  })
  //                  })
  //                 })
  console.log(this.entity_id);
  console.log(this.companyEntity);
  this.httpClient.put('http://localhost:9090/Entity/'+this.entity.entity_id,this.companyEntity)
                                       .subscribe((data:any)=>{
                                           console.log(data);
                      
                                       })
   

 }


}
