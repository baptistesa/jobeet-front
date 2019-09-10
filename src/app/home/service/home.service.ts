import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.baseUrl + "getusers");
  }
}
