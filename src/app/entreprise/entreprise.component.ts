import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EntrepriseService } from './service/entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntrepriseComponent implements OnInit {

  display_form = false;
  entreprise: any;
  offres: any;

  constructor(public router: Router, private nav: NavbarService, private _sanitizer: DomSanitizer, private http: EntrepriseService) {
    this.entreprise = JSON.parse(localStorage.getItem("entreprise"));
    let id = this.entreprise.id;
    this.offres = this.getEntrepriseOffres(this.entreprise.id);
  }

  ngOnInit() {
    this.nav.show();
  }

  // Get sanitized picture
  getBackground(url) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
  
  getEntreprise(id) {
    this.http.getEntreprise(id)
      .subscribe(data => {
        this.entreprise = JSON.parse(JSON.stringify(data)).data[0];
      })
  }

  getEntrepriseOffres(id) {
    this.http.getEntrepriseOffres(id)
      .subscribe(data => {
        this.offres = JSON.parse(JSON.stringify(data)).data;
      })
  }

  sendtoOffre(offre) {
    localStorage.setItem("offre", JSON.stringify(offre));
    this.router.navigate(["/offre"]);
  }
}
