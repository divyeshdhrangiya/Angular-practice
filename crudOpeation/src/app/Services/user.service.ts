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
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTY1MzQ5NTE3NCwiZXhwIjoxNjUzNTgxNTc0fQ.M7m-sBZweQyb8Dmo9KXC1JGF-DHxKtijuT8i9CgjHxU`
    );
   return  this.http.get(this.url,{headers:header});
   }

   AddUser(data:any)
   {
     console.log("dsdsfdfgfghg",data)
    let header = new HttpHeaders().set(
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTY1MzQ5NTE3NCwiZXhwIjoxNjUzNTgxNTc0fQ.M7m-sBZweQyb8Dmo9KXC1JGF-DHxKtijuT8i9CgjHxU`
    );
   return  this.http.post(this.AddData,data,{headers:header});
   }

   DeleteUser(id:any)
   {
    let header = new HttpHeaders().set(
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTY1MzQ5NTE3NCwiZXhwIjoxNjUzNTgxNTc0fQ.M7m-sBZweQyb8Dmo9KXC1JGF-DHxKtijuT8i9CgjHxU`
    );
   return  this.http.delete(this.deleteData + id,{headers:header});

   }


   UpdateUSer(data:any,id:any)
   {
    let header = new HttpHeaders().set(
      'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTY1MzQ5NTE3NCwiZXhwIjoxNjUzNTgxNTc0fQ.M7m-sBZweQyb8Dmo9KXC1JGF-DHxKtijuT8i9CgjHxU`
    );
   return  this.http.delete(this.deleteData + id,{headers:header});

   }

}
