import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilComponent implements OnInit {

  display_form = false;

  constructor(private nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

  // Ajouter une expérience
  addExperience() {
    this.display_form = true;
  }

}
