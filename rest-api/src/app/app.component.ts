import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import {UsersDataService}from "./Services/UserDataService"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-api';
  data:any;
  response: any;
  newdata:any;
  user:any;
  tittle:any;
  subTittle:any

  achievementArr: Array<any> = []
  constructor(private http : HttpClient,private userData:UsersDataService){
   this.userData.users().subscribe((data:any)=>{
     console.log("alldata=>",data.data)
     this.newdata=data.data;
   })
    
  } 
  
 
// <-----------------------------Add using form------------------------------------->
getUserFormData(data:any)

{
console.log(data);
this.userData.SaveUSer(data).subscribe((result)=>{
  console.warn(data)
})
}

DeleteUser(data:any)
{
  this.userData.DeleteUser(data).subscribe((result)=>{
    console.warn(data)
  })
}
addDataForm(data:any)
{
 this.data=data
 console.log(data)

}
UpdateUSer(data:any,id:any)
{
  console.log("updateuser=>",data)
  this.userData.UpdateUSer(data,id).subscribe((result)=>{
    console.log(result)
  })
}

 
 
}
