import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  base_url = "http://localhost:3000/entreprises/";
  base_url2 = "http://localhost:3000/offres/";

  constructor(private http: HttpClient) { }

  getEntreprise(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "getEntreprise/" + id);
  }

  getCompetencesByOffre(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url2 + "getCompetences/" + id, httpOptions);
  }
}
