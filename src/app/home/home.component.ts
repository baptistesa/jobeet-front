import { Component, OnInit } from '@angular/core';
import { HomeService } from './provider/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : any;

  constructor(private http: HomeService) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this.http.getAllUsers()
      .subscribe(data => {
        this.users = JSON.parse(JSON.stringify(data)).data;
      }, err => {
        console.log("error = ", err)
      })
  }

}
