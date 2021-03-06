import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy,ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NavbarService } from './service/navbar.service';
import { AuthService } from '../login/service/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements AfterViewInit {

  user;
  show_side = false;

  constructor(public nav: NavbarService, private cdRef:ChangeDetectorRef, private auth: AuthService, private _sanitizer : DomSanitizer) { }

  // Retrieve data to display in navbar
  ngAfterViewInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.nav.visible.subscribe(data => {
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

  // Get sanitized picture
  getBackground(image) {
    let safe_pic = "http://localhost:3000/pictures/" + image
    return this._sanitizer.bypassSecurityTrustStyle(`url(${safe_pic})`);
  }

}
