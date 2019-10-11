import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OffresComponent implements OnInit {

  constructor(private nav : NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
