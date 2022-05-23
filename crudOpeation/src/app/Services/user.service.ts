import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:7000/get-data"
  AddData="http://localhost:7000/signup";
  constructor( private http: HttpClient,
   ) { }

   GetAllUSer()
   {
    let header = new HttpHeaders().set(
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTY1Mjk3Mzc0MiwiZXhwIjoxNjUzMDYwMTQyfQ.Q0tm0CAroQln95zt4eSZE8mwOsEmwjHl0rqxHdRevCc`
    );
   return  this.http.get(this.url,{headers:header});
   }

   AddUser(data:any)
   {
     console.log("dsdsfdfgfghg",data)
    let header = new HttpHeaders().set(
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTY1Mjk3Mzc0MiwiZXhwIjoxNjUzMDYwMTQyfQ.Q0tm0CAroQln95zt4eSZE8mwOsEmwjHl0rqxHdRevCc`
    );
   return  this.http.post(this.AddData,data,{headers:header});
   }

}
