import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
    providedIn:"root",
})
export class UsersDataService{
    url="http://localhost:7000/achivement/getAchivement";
    addurl="http://localhost:7000/achivement/addAchivement";
    delete="http://localhost:7000/achivement/delete/";
    update="http://localhost:7000/achivement/update/"

    constructor(private http:HttpClient)
    {

    }
    users()
    {
        return this.http.get(this.url);
    }
    SaveUSer(data:any)
    {
        let header = new HttpHeaders().set(
            'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTY1Mjg2NjQ1NiwiZXhwIjoxNjUyOTUyODU2fQ.GMr7lVN7RbEhHSAV__ZXtB_pvcsA874PkawVi-jSKgw`
          );
        return this.http.post(this.addurl,data,{headers:header});

    }

    DeleteUser(id:any)
    {
        let header = new HttpHeaders().set(
            'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTY1Mjg2NjQ1NiwiZXhwIjoxNjUyOTUyODU2fQ.GMr7lVN7RbEhHSAV__ZXtB_pvcsA874PkawVi-jSKgw`
          );
        return this.http.delete(this.delete+id._id, { headers: header })
    }

    UpdateUSer(data:any,id:any)
    {
        let header = new HttpHeaders().set(
            'Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTY1Mjg2NjQ1NiwiZXhwIjoxNjUyOTUyODU2fQ.GMr7lVN7RbEhHSAV__ZXtB_pvcsA874PkawVi-jSKgw`
          );
console.log(data.title)
        return this.http.put(this.update+id, {"tittle":data.tittle,"subTitte":data.subTitte},{ headers: header })
    }
}