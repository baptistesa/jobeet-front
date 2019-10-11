import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  base_url = "http://localhost:3000/cv/";

  constructor(private http: HttpClient) {

  }

  getCV(id) {
    return this.http.get(this.base_url + "get/" + id);
  }
}
