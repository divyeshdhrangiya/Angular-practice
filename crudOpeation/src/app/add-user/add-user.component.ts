import { Component, OnInit } from '@angular/core';
import {UserService} from "./../Services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  getUserFormData(data:any)
  {
    this.userService.AddUser(data).subscribe((AddData:any)=>{
      console.log(data)
    })


  }

}
