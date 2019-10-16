import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  base_url = "http://localhost:3000/offres/";

  constructor(private http: HttpClient) { }

  getOffres() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "getOffres/", httpOptions)
  }
}
