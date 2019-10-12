import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MesoffresService } from './service/mesoffres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesoffres',
  templateUrl: './mesoffres.component.html',
  styleUrls: ['./mesoffres.component.scss']
})
export class MesoffresComponent implements OnInit {

  display_form = false;
  mesoffres;

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer, private http: MesoffresService, private router: Router) {
    this.addOffre();
   }

  ngOnInit() {
    this.nav.show();
  }

  addOffre() {
    this.display_form = true;
  }
}
