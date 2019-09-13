import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { AuthService } from './service/auth.service';
import { NavbarService } from '../navigation/service/navbar.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  displaySpinner = false;

  mailFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(public router: Router, private auth: AuthService, private snackBar: MatSnackBar, private nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

  connect() {
    this.displaySpinner = true;
    let body = {
      mail : this.mailFormControl.value,
      password : this.passwordFormControl.value
    }
    this.auth.login(body)
      .subscribe(data => {
        this.displaySpinner = false;
        localStorage.setItem("token", JSON.parse(JSON.stringify(data)).token);
        localStorage.setItem("user", JSON.stringify(JSON.parse(JSON.stringify(data)).data));
        this.router.navigate(["/"]);
      }, err => {
        this.snackBar.open("Identifiants incorrects", "Ok", {
          duration: 2000,
        });
        this.displaySpinner = false;
      })
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}