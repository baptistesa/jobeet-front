import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { AllUsersService } from './service/all-users.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users : any;

  constructor(private nav: NavbarService, private http : AllUsersService, private _sanitizer : DomSanitizer, private router: Router) {
    this.getUsers();
  }

  ngOnInit() {
    this.nav.show();
  }

  // Get all users
  getUsers() {
    this.http.getUsers()
      .subscribe(data => {
        this.users = JSON.parse(JSON.stringify(data)).data;
      })
  }

  // Get sanitized picture
  getBackground(image) {
    let safe_pic = "http://localhost:3000/pictures/" + image
    return this._sanitizer.bypassSecurityTrustStyle(`url(${safe_pic})`);
  }

  // Go to the details page user
  goToUser(id) {
    this.router.navigate(["/user", id]);
  }

}
