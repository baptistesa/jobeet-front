import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesoffresService {
  base_url = "http://localhost:3000/offres/";

  constructor(private http: HttpClient) { }

  getMesoffres() {
    return this.http.get(this.base_url + "getOffres/")
  }

  addOffre(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.post(this.base_url + "addOffre", body, httpOptions);
  }
}
