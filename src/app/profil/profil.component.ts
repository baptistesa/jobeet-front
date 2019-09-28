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
  user : any;

  constructor(private nav: NavbarService) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.nav.show();
  }

  // Ajouter une expérience
  addExperience() {
    this.display_form = true;
  }

}
