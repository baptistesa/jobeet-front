import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import { NavbarService } from '../navigation/service/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users;
  baptiste;

  constructor(private homeService: HomeService, private nav: NavbarService) {
    this.getUsers();
  }

  ngOnInit() {
    this.nav.show();
  }

  getUsers() {
    this.homeService.getAllUsers()
      .subscribe(data => {
        this.users = JSON.parse(JSON.stringify(data)).data;
      }, err => {
        console.log("error = ", err)
      })
  }

}
