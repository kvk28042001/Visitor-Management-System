import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Contact } from 'src/app/commons/common.objects';
import { MainService } from '../main.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
   name = new FormControl;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  phone = new FormControl;

  constructor(private httpClient : HttpClient,private service : MainService){

  }

  contact : Contact = {
    contactId: 0,
    name: '',
    email: '',
    phone: ''
  }

  public addContact(){
     console.log(this.contact);
  }

 


  
}

