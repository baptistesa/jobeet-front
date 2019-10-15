import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatchsService } from './service/matchs.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatchsComponent implements OnInit {

  user: any;
  matchs: any;
  candidat: any;

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer, private http: MatchsService, private router: Router) { 
    
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getUser();
    if (this.user.role == 0)
      this.getUserMatch();
    else
      this.getRecruteurMatch();
  }

  ngOnInit() {
    this.nav.show();
  }

  acceptMatch(match) {
    let body = {
      id : match.id
    }
    this.http.acceptMatch(body)
      .subscribe();
  }

  deleteMatch(id) {
    this.http.deleteMatch(id)
      .subscribe( data => {
        alert("Match supprimé");
        this.getRecruteurMatch();
    });
  }

  getUserMatch() {
    this.http.getUserMatch()
      .subscribe(data => {
        this.matchs = JSON.parse(JSON.stringify(data)).data;
      })
  }

  getRecruteurMatch() {
    this.http.getRecruteurMatch()
      .subscribe(data => {
        this.matchs = JSON.parse(JSON.stringify(data)).data;
      })
  }

  getCandidat(id)
  {
    this.http.getUser(id)
      .subscribe(data => {
        this.candidat = JSON.parse(JSON.stringify(data)).data[0];
      })
  }

  getUser() {
    this.http.getUser(this.user.id)
      .subscribe(data => {
        this.user = JSON.parse(JSON.stringify(data)).data[0];
        localStorage.setItem("user", JSON.stringify(this.user));
      })
  }
}
