import { Component } from '@angular/core';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent {

  inputValues: string[] = [];

  person : any = {
    name : '',
    address : '',
    document : ''
  }

  // Function to add an input tag
  addInput() {
    this.inputValues.push('');
    console.log(this.inputValues);
  }

  numberOfPeople: number = 0;
  peopleData: any[] = [];

  // Function to add input fields for people
  addPeopleFields() {
    if (this.numberOfPeople > 0) {
      this.peopleData = new Array(this.numberOfPeople);
    } else {
      this.peopleData = [];
    }
  }

  public submit(){
     console.log(this.peopleData);
  }

}
