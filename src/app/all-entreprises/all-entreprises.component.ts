import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AllEntreprisesService } from './service/all-entreprises.service';

@Component({
  selector: 'app-all-entreprises',
  templateUrl: './all-entreprises.component.html',
  styleUrls: ['./all-entreprises.component.scss']
})

export class AllEntreprisesComponent implements OnInit {

  display_form = false;
  user: any;
  entreprises: any;

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer, private http: AllEntreprisesService) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getEntreprises();
  }

  ngOnInit() {
    this.nav.show();
  }

  // Ajouter une expérience
  addEntreprise() {
    this.display_form = true;
  }

  /*// Get sanitized picture
  getBackground(image) {
    let safe_pic = "http://localhost:3000/pictures/" + image
    return this._sanitizer.bypassSecurityTrustStyle(`url(${safe_pic})`);
  }*/

  // Retrieve entreprises
  getEntreprises() {
    this.http.getEntreprises()
      .subscribe(data => {
        this.entreprises = data
      })
      console.log("Entreprises == ", this.entreprises)
  }
}
