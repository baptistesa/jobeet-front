import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AllEntreprisesService } from './service/all-entreprises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-entreprises',
  templateUrl: './all-entreprises.component.html',
  styleUrls: ['./all-entreprises.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AllEntreprisesComponent implements OnInit {

  display_form = false;
  user: any;
  entreprises: any;

  constructor(public router: Router, private nav: NavbarService, private _sanitizer: DomSanitizer, private http: AllEntreprisesService) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getEntreprises();
  }

  ngOnInit() {
    this.nav.show();
  }

  // Ajouter une entreprise
  addEntreprise() {
    this.display_form = true;
  }

  // Retrieve entreprises
  getEntreprises() {
    this.http.getEntreprises()
      .subscribe(data => {
        this.entreprises = JSON.parse(JSON.stringify(data)).data;
      })
      
  }
 
  // Get image for entreprise's background box
  getBackground(url) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

  sendtoProfil(entreprise) {
    localStorage.setItem("entreprise", JSON.stringify(entreprise));
    this.router.navigate(["/entreprise"]);
  } 
}
