import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://43.204.32.104:7000/get-data"
  AddData="http://43.204.32.104:7000/signup";
  deleteData="http://43.204.32.104:7000/delete/"
  constructor( private http: HttpClient,
   ) { }

   GetAllUSer()
   {
    let header = new HttpHeaders().set(
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2NTM3NDY5ODksImV4cCI6MTY1MzgzMzM4OX0.8y7k_PnFymoDe0cIRyGmkf0o_0vQz8D5OpvaNvdfUdU`
    );
   return  this.http.get("https://reqres.in/api/users");
   }

   AddUser(data:any)
   {
     console.log("dsdsfdfgfghg",data)
    let header = new HttpHeaders().set(
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2NTM3NDY5ODksImV4cCI6MTY1MzgzMzM4OX0.8y7k_PnFymoDe0cIRyGmkf0o_0vQz8D5OpvaNvdfUdU`
    );
   return  this.http.post(this.AddData,data,{headers:header});
   }

   DeleteUser(id:any)
   {
    let header = new HttpHeaders().set(
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2NTM3NDY5ODksImV4cCI6MTY1MzgzMzM4OX0.8y7k_PnFymoDe0cIRyGmkf0o_0vQz8D5OpvaNvdfUdU`
    );
   return  this.http.delete(this.deleteData + id,{headers:header});

   }


   UpdateUSer(data:any,id:any)
   {
    let header = new HttpHeaders().set(
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2NTM3NDY5ODksImV4cCI6MTY1MzgzMzM4OX0.8y7k_PnFymoDe0cIRyGmkf0o_0vQz8D5OpvaNvdfUdU`
    );
   return  this.http.delete(this.deleteData + id,{headers:header});

   }

}
