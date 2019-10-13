import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { OffresService } from '../offres/service/offres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatchsComponent implements OnInit {

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer, private http: OffresService, private router: Router) { }

  ngOnInit() {
    this.nav.show();
  }

}
