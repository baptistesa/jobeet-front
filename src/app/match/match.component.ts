import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor(private nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
