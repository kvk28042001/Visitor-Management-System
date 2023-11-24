import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 
public myForm: FormGroup | any;
  shop: FormGroup | any ;

  constructor(private httpClient : HttpClient){

  }


ngOnInit() {
this.shop = new FormGroup({
shopname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
location: new FormControl('', [Validators.required, Validators.maxLength(50)]),
state: new FormControl('', [Validators.required, Validators.maxLength(10)]),
email: new FormControl('',[Validators.email]),
logo: new FormControl('',[Validators.required])
});
}


public myError = (controlName: string, errorName: string) =>{
return this.myForm.controls[controlName].hasError(errorName);
}


public onSubmit() : any{
  console.log(this.onSubmit)
}

shoppe : any = {};





    public submit(){
         this.shoppe = this.shop.value;
         this.httpClient.post("",this.shoppe)
                        .subscribe((data : any)=>{
                            console.log(data);
                        })

    }
}
  




