import { Component, OnInit } from '@angular/core';
import {UserService} from "./../Services/user.service";
import {HttpClient} from '@angular/common/http';
import  {User} from "./../Interfaces/User"




@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})



export class DisplayDataComponent implements OnInit {

  userData:any;
  id:any
  
  constructor(private http:HttpClient,private userService:UserService) { 
    this.userService.GetAllUSer().subscribe((data:any)=>{
      this.userData=data;
      console.log(this.userData);
    })


  }
  ngOnInit(): void {
  }
  UserDelete(userData:any)
  {
    this.userService.DeleteUser(userData._id).subscribe((data:any)=>{
      console.log(data)
    })
  }
EditData(userData:any)
{
  this.userData=userData
  // this.id=userData._id
  console.log(userData._id);
  
  
}

  UserUpdate(userData:any)
  {
    this.userService.UpdateUSer(userData,userData._id).subscribe((data:any)=>{
      console.log(userData)
      this.userData=userData;


    })
  }



  
  
}
