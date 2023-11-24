import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vms-home',
  templateUrl: './vms-home.component.html',
  styleUrls: ['./vms-home.component.css']
})
export class VmsHomeComponent {

  showMore = false;
  toggleShowMore() {
    this.showMore = !this.showMore;
  }


  showMore1 = false;
  toggleShowMore1() {
    this.showMore1 = !this.showMore1;
  }
  

  showMore2 = false;
  toggleShowMore2() {
    this.showMore2 = !this.showMore2;
  }


  showMore3 = false;
  toggleShowMore3() {
    this.showMore3 = !this.showMore3;
  }
  

  
}
