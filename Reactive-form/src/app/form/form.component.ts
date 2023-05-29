import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  name = new FormControl('');
  

  //Call when click button and update value
  updateName() {
    this.name.setValue('divyesh');
  }
}
