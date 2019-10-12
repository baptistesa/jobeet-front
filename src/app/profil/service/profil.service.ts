import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  base_url = "http://localhost:3000/cv/";

  constructor(private http: HttpClient) {

  }

  // Return CV of user
  getCV(id) {
    return this.http.get(this.base_url + "get/" + id);
  }

  // Update description
  updateDescription(description) {
    let body = {
      description : description
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.put(this.base_url + "modifyCV", body, httpOptions);
  }
}
