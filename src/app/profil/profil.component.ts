import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfilService } from './service/profil.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilComponent implements OnInit {

  display_form = false;
  display_form_description = false;
  user: any;
  cv: any;

  // Fields
  description = "";

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer, private http: ProfilService) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getCV();
  }

  ngOnInit() {
    this.nav.show();
  }

  // Ajouter une expérience
  addExperience() {
    this.display_form = true;
  }

  // Get sanitized picture
  getBackground(image) {
    let safe_pic = "http://localhost:3000/pictures/" + image
    return this._sanitizer.bypassSecurityTrustStyle(`url(${safe_pic})`);
  }

  // Retrieve CV
  getCV() {
    this.http.getCV(this.user.id)
      .subscribe(data => {
        this.cv = data
      })
  }

  // Display form to update description
  displayFormDescription() {
    if (!this.display_form_description) {
      this.display_form_description = true;
      return;
    }
    this.display_form_description = false;
    this.http.updateDescription(this.description)
      .subscribe(data => {
        this.getCV();
        alert('Description modifiée avec succès !')
      });
  }

}
