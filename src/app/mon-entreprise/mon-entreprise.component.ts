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
  display_form = false;
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
    else
      this.getEntreprises();
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
        this.entreprise = JSON.parse(JSON.stringify(data)).data[0];
        console.log("entreprise : ", this.entreprise)
      })
  }

  addEntreprise() {
    this.display_form = true;

    this.add_entreprise.name = this.add_entreprise.name;
    this.add_entreprise.description = this.add_entreprise.description;
    this.http.addEntreprise(this.add_entreprise)
      .subscribe(data => {
        this.modifyIdEntreprise(JSON.parse(JSON.stringify(data)).data[0])
        alert("Entreprise ajoutée avec succès");
      }, err => {
        console.log("error == ", err)
      });
  }

  modifyIdEntreprise(entreprise) {
    let body = {
      id_entreprise : entreprise.id
    }
    this.http.modifyIdEntreprise(body)
      .subscribe();
    //refresh user !!!!
  }

  getBackground(url) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
}
