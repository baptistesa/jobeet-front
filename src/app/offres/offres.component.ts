import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { OffresService } from './service/offres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  display_form = false;
  offres;

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer, private http: OffresService, private router: Router) {
    this.getOffres();
  }

  ngOnInit() {
    this.nav.show();
  }

  // Ajouter une offre
  addOffres() {
    this.display_form = true;
  }

  // Get sanitized picture
  getBackground(url) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

  getOffres() {
    this.http.getOffres()
      .subscribe(data => {
        //console.log("test offres : " + JSON.stringify(data));
        this.offres = JSON.parse(JSON.stringify(data)).data;
      })
  }

  sendtoProfil(offre) {
    localStorage.setItem("offre", JSON.stringify(offre));
    this.router.navigate(["/offre"]);
  }
}
