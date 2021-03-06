import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { SearchService } from './service/search.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  users;
  offres;
  entreprises;

  constructor(private nav: NavbarService, private http: SearchService, private _sanitizer: DomSanitizer, public router: Router) {
    this.getUsers();
    this.getOffres();
    this.getEntreprises();
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

  // Get all offres
  getOffres() {
    this.http.getOffres()
      .subscribe(data => {
        this.offres = JSON.parse(JSON.stringify(data)).data;
      })
  }

  // Get all entreprises
  getEntreprises() {
    this.http.getEntreprises()
      .subscribe(data => {
        this.entreprises = JSON.parse(JSON.stringify(data)).data
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
