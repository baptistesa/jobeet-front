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
  has_account = true;
  display_phone = false;

  // Form controls for login
  mailFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  // Form controls for signup
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required
  ]);
  mailSignUpFormControl = new FormControl('', [
    Validators.required
  ]);
  repeatMailSignUpFormControl = new FormControl('', [
    Validators.required
  ]);
  phoneSignUpFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordSignUpFormControl = new FormControl('', [
    Validators.required
  ]);
  repeatPasswordSignUpFormControl = new FormControl('', [
    Validators.required
  ]);
  codeFormControl = new FormControl('', [
    Validators.required
  ]);
  is_recruteur = false;

  matcher = new MyErrorStateMatcher();

  constructor(public router: Router, private auth: AuthService, private snackBar: MatSnackBar, private nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();
    if (localStorage.getItem("user"))
      this.router.navigate(["/"]);
  }

  // Connexion
  connect() {
    this.displaySpinner = true;
    let body = {
      mail: this.mailFormControl.value,
      password: this.passwordFormControl.value
    }
    this.auth.login(body)
      .subscribe(data => {
        this.displaySpinner = false;
        localStorage.setItem("token", JSON.parse(JSON.stringify(data)).token);
        localStorage.setItem("user", JSON.stringify(JSON.parse(JSON.stringify(data)).data));
        this.nav.setUser(JSON.parse(JSON.stringify(data)).data);
        this.router.navigate(["/"]);
      }, err => {
        if (err.error.data == "Not confirmed")
          this.snackBar.open("Le compte n'a pas été vérifié", "Ok", {
            duration: 2000,
          });
        else
          this.snackBar.open("Identifiants incorrects", "Ok", {
            duration: 2000,
          });
        this.displaySpinner = false;
      })
  }

  // Inscription
  signUp() {
    let role = 0;
    if (this.is_recruteur)
      role = 1;
    this.displaySpinner = true;
    let body = {
      name: this.nameFormControl.value,
      last_name: this.lastNameFormControl.value,
      mail: this.mailSignUpFormControl.value,
      phone: this.phoneSignUpFormControl.value,
      password: this.passwordSignUpFormControl.value,
      role: role
    }
    this.auth.signUp(body)
      .subscribe(data => {
        this.displaySpinner = false;
        this.display_phone = true;
        localStorage.setItem("token", JSON.parse(JSON.stringify(data)).token);
        localStorage.setItem("user", JSON.stringify(JSON.parse(JSON.stringify(data)).data));
      }, err => {
        this.snackBar.open("Une erreur s'est produite = " + err, "Ok", {
          duration: 2000,
        });
        this.displaySpinner = false;
      })
  }

  // Toggle forms login/signup
  toggleConnection() {
    this.has_account = !this.has_account;
  }

  // Confirme code
  confirmCode() {
    let body = {
      mail: this.mailSignUpFormControl.value,
      code: this.codeFormControl.value
    }
    this.auth.confirmCode(body)
      .subscribe(data => {
        localStorage.setItem("user", JSON.stringify(JSON.parse(JSON.stringify(data)).data));
        this.nav.setUser(JSON.parse(JSON.stringify(data)).data);
        this.router.navigate(["/"]);
      }, err => {
        this.snackBar.open("Code invalide. Veuillez réessayer", "Ok", {
          duration: 2000,
        });
      })
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}