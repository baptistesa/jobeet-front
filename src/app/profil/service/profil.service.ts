import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  base_url = "http://localhost:3000/";

  constructor(private http: HttpClient) {

  }

  // Return CV of user
  getCV(id) {
    return this.http.get(this.base_url + "cv/get/" + id);
  }

  // Update description
  updateDescription(description) {
    let body = {
      description: description
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.put(this.base_url + "cv/modifyCV", body, httpOptions);
  }

  // Add formation
  addFormation(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.post(this.base_url + "formations/add", body, httpOptions);
  }

  // Add experience
  addExperience(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.post(this.base_url + "experience/add", body, httpOptions);
  }
}
