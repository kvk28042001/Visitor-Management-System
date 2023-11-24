import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-menureport',
  templateUrl: './menureport.component.html',
  styleUrls: ['./menureport.component.css']
})
export class MenureportComponent {
  menus: any[] = [];
  baseUri: string = 'http://localhost:9090/visitor';

  constructor(private httpClient:HttpClient,private service : MainService){
    this.service.getAllmenus((data : any)=>{
        this.menus = data;
    })
}



  }



