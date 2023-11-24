import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  
})
export class SidenavComponent {

  @Input() sideNavStatus:boolean = false;

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus : boolean = false;



  constructor(){}

  SideNavToggle(){
    this.sideNavStatus = !this.sideNavStatus;
    this.sideNavToggled.emit(this.sideNavStatus);
  }

  closeNav() {
    this.menuStatus = false;
  }
}
