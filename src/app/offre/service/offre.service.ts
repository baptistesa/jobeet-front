import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  base_url = "http://localhost:3000/entreprises/";
  base_url2 = "http://localhost:3000/offres/";
  base_url3 = "http://localhost:3000/users/";
  base_url4 = "http://localhost:3000/matchs/";

  constructor(private http: HttpClient) { }

  getEntreprise(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "getEntreprise/" + id, httpOptions);
  }

  getCompetencesByOffre(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url2 + "getCompetences/" + id, httpOptions);
  }

  getUser(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.get(this.base_url3 + "getUser/" + id, httpOptions);
  }
  
  addMatch(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.post(this.base_url4 + "addMatch/", body, httpOptions);
  }
}
