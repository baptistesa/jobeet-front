import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private base_url = "http://localhost:3000/"

  constructor(private http: HttpClient) { }


  // Return all offres
  getOffres() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "offres/getOffres", httpOptions)
  }

  // Return all users
  getUsers() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "users/getUsers", httpOptions)
  }

  // Return all entreprises
  getEntreprises() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "entreprises/getEntreprises", httpOptions)
  }
}
