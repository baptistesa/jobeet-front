import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy,ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NavbarService } from './service/navbar.service';
import { AuthService } from '../login/service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements AfterViewInit {

  user;
  show_side = false;

  constructor(public nav: NavbarService, private cdRef:ChangeDetectorRef, private auth: AuthService) { }

  // Retrieve data to display in navbar
  ngAfterViewInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.nav.visible.subscribe(data => {
      console.log("visible = ", data)
      if (data && data == "true") {
        this.show_side = true;
        this.cdRef.detectChanges();
      }
      else {
        this.show_side = false;
        this.cdRef.detectChanges();
      }
    })
    this.nav.user.subscribe(user => {
      if (user) {
        console.log("user = ", user)
        this.user = user;
        this.cdRef.detectChanges();
      }
    })
  }

  // Logout function
  logout() {
    this.nav.hide();
    this.auth.logout();
  }

}
