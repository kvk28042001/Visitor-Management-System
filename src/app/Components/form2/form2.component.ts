import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/commons/common.objects';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  departments: any[] = [];
  department: any = {};
  companyEntity: any ={};
  baseUri: string = 'http://localhost:9090/visitor';
  Companiesentity: any[] = [];
  depart : Department = {
    department_id: 0,
    department_description: '',
    entity: {
      entity_id: 0,
      entity_description: '',
      status: false
    },
    status: false
  }
  entities:any[]=[];


  constructor(private httpClient : HttpClient,private route : ActivatedRoute){
    this.httpClient.get("http://localhost:9090/Entity")
                   .subscribe((data:any)=>{
                    this.entities=data;
                   })

  }

  department_id : any = '';

  

  ngOnInit(){
      this.route.paramMap.subscribe(params =>{
           this.department_id = params.get('data');
           //this.updateCompanyProcess(this.entity_id);
           this.httpClient.get("http://localhost:9090/visitor/Department/"+this.department_id)
                          .subscribe((data : any)=>{
                              this.depart = data;
                          })
      }

      )
  }


  public onAdd(entity_id:number){
    this.httpClient.get("http://localhost:9090/Entity/"+entity_id)
                    .subscribe((data:any)=>{
                      this.department.entity=data;
                      console.log(this.department.entity)
                    })
  }
  
  public updateCompanyProcess(){
    console.log(this.depart.department_id);
    this.httpClient.put('http://localhost:9090/visitor/Department'+"/"+this.depart.department_id,this.department)
                   .subscribe((data : any)=>{
                       console.log(data);
                       this.httpClient.get(this.baseUri)
                                      .subscribe((response : any)=>{
                                         this.departments = response;
                                      })
                   })
  }
}
