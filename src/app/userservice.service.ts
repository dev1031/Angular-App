import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor( private http: HttpClient ) {}
  
  public userInfo(){
   return this.http.get("https://jsonplaceholder.typicode.com/users")
  }  
}