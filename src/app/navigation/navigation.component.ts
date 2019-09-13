import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from './service/navbar.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
  }

}
