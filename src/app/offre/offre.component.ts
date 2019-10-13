import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OffreComponent implements OnInit {

  display_form = false;
  offre;

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer) {
    this.offre = JSON.parse(localStorage.getItem("offre"));
   }

  ngOnInit() {
    this.nav.show();
  }

}
