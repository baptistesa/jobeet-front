import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MonEntrepriseService } from './service/mon-entreprise.service';


@Component({
  selector: 'app-mon-entreprise',
  templateUrl: './mon-entreprise.component.html',
  styleUrls: ['./mon-entreprise.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MonEntrepriseComponent implements OnInit {

  user: any;
  entreprise: any;
  entreprises: any;
  add_entreprise = {
    name: "",
    description: ""
  }

  constructor(public router: Router, private nav: NavbarService, private _sanitizer: DomSanitizer, private http: MonEntrepriseService) {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user.id_entreprise != null)
      this.getEntreprise(this.user.id_entreprise);
  }

  ngOnInit() {
    this.nav.show();
  }

  getEntreprises() {
    this.http.getEntreprises()
      .subscribe(data => {
        this.entreprises = JSON.parse(JSON.stringify(data)).data;
      })
  }

  getEntreprise(id) {
    this.http.getEntreprise(id)
      .subscribe(data => {
        this.entreprise = JSON.parse(JSON.stringify(data)).data;
      })
  }

  addEntreprise() {
    this.http.addEntreprise(this.add_entreprise)
      .subscribe();
  }

}
