import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntrepriseComponent implements OnInit {

  display_form = false;
  entreprise: any;

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer) {
    this.entreprise = JSON.parse(localStorage.getItem("entreprise"));
  }

  ngOnInit() {
    this.nav.show();
  }

  // Get sanitized picture
  getBackground(url) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

}
