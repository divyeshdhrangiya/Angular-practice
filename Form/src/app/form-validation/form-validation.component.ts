import { Component, OnInit } from '@angular/core';
import  {FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() { }
  name=new FormControl("",Validators.required);
  Address=new FormControl("",[Validators.required,Validators.minLength(10)]);


  ngOnInit(): void {
  }

}
