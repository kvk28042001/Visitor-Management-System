import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-section-report',
  templateUrl: './section-report.component.html',
  styleUrls: ['./section-report.component.css']
})
export class SectionReportComponent {
  sections: any[] = [];
  baseUri: string = 'http://localhost:9090';
  constructor(private httpClient:HttpClient,private service : MainService){
    this.service.getAllsections((data : any)=>{
      this.sections = data;
})
}
  }

