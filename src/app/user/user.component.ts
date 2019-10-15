import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from './service/user.service';
import { NavbarService } from '../navigation/service/navbar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  user;
  cv;

  constructor(private _Activatedroute:ActivatedRoute, private _sanitizer : DomSanitizer, private http: UserService, private nav: NavbarService) {
    this.getUser(this._Activatedroute.snapshot.paramMap.get("id"));
    this.getCV(this._Activatedroute.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.nav.show();
  }

  // Get user clicked
  getUser(id) {
    this.http.getUser(id)
      .subscribe(data => {
        this.user = JSON.parse(JSON.stringify(data)).data[0];
        localStorage.setItem("user", JSON.stringify(this.user));
      })
  }

  // Get cv of user
  getCV(id) {
    this.http.getCV(id)
      .subscribe(data => {
        this.cv = data;
      })
  }
 
  // Get image for entreprise's background box
  getBackground(image) {
    let safe_pic = "http://localhost:3000/pictures/" + image
    return this._sanitizer.bypassSecurityTrustStyle(`url(${safe_pic})`);
  }

  

}
