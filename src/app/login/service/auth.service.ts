import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login_url = "http://localhost:3000/users/login";

  constructor(
    private router: Router, private http: HttpClient
  ) { }

  login(body) {
    return this.http.post(this.login_url, body);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
