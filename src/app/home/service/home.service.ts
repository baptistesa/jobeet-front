import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.baseUrl + "getusers", httpOptions);
  }
}
