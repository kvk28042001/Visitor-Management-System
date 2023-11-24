import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.css']
})
export class ConfirmationBoxComponent {

  @Output() confirmed = new EventEmitter<boolean>();
  title: string = "Confirmation" ;
  message: string = "Do you want to Approve?";

  onNoClick(): void {
    this.confirmed.emit(false); // User clicked 'No'
  }

  onYesClick(): void {
    this.confirmed.emit(true); // User clicked 'Yes'
  }

}
