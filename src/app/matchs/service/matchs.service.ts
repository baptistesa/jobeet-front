import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

  base_url = "http://localhost:3000/matchs/"
  base_url2 = "http://localhost:3000/users/"

  constructor(private http: HttpClient) { 
    
  }

  deleteMatch(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.post(this.base_url + "deleteMatch", id, httpOptions);
  }

  getUserMatch() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.get(this.base_url + "getUserMatch/", httpOptions);
  }

  getRecruteurMatch() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.get(this.base_url + "getRecruteurMatch/", httpOptions);
  }

  acceptMatch(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.put(this.base_url + "acceptMatch/", id, httpOptions)
  }

  getUser(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.get(this.base_url2 + "getUser/" + id, httpOptions);
  }
}
