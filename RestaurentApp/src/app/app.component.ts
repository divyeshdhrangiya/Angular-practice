import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestaurentApp';

  constructor(private http: HttpClient) { 
    
  }
  
  configUrl="http://localhost:7000//blog/getblog"
  getConfig() {
    const data= this.http.get(this.configUrl);
    console.log(data);
  }
  
}
