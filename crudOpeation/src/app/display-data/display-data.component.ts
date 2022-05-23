import { Component, OnInit } from '@angular/core';
import {UserService} from "./../Services/user.service";
import {HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})



export class DisplayDataComponent implements OnInit {

  userData:any;
  constructor(private http:HttpClient,private userService:UserService) { 
    this.userService.GetAllUSer().subscribe((data:any)=>{
      this.userData=data;
      console.log(this.userData);
    })


  }
  ngOnInit(): void {
  }

  
  
}
