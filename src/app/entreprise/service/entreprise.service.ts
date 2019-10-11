import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  
  base_url = "http://localhost:3000/entreprises/";

  constructor(private http: HttpClient) {
  
  }

  getEntreprise(id) {
    return this.http.get(this.base_url + "getEntreprise/" + id);
  }
}
