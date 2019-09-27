import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base_url = "http://localhost:3000/users";

  constructor(
    private router: Router, private http: HttpClient
  ) { }

  login(body) {
    return this.http.post(this.base_url + "/login", body);
  }

  signUp(body) {
    return this.http.post(this.base_url + "/signup", body);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  confirmCode(body) {
    return this.http.post(this.base_url + "/confirm", body)
  }
}
