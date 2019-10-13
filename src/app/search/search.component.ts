import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  users;
  offres;
  entreprises;

  constructor(private nav: NavbarService, private http: SearchService) {
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

}
