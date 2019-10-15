import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatListService {

  base_url = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  // Retrieve users match
  getUserMatch() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.get(this.base_url + "matchs/getUserMatch/", httpOptions);
  }
}
