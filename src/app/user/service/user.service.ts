import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = "http://localhost:3000/"

  constructor(private http: HttpClient) {}

  // Retrieve user
  getUser(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.get(this.base_url + "users/getUser/" + id, httpOptions);
  }

  // Return CV of user
  getCV(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "cv/get/" + id, httpOptions);
  }
}
