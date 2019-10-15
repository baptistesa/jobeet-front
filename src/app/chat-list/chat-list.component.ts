import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { ChatListService } from './service/chat-list.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  user;
  conversations;

  constructor(private nav: NavbarService, private http : ChatListService, private _sanitizer : DomSanitizer, private router: Router) {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user.role == 0)
      this.getUserMatchs();
  }

  ngOnInit() {
    this.nav.show();
  }

  // Get users match
  getUserMatchs() {
    this.http.getUserMatch()
      .subscribe(data => {
        this.conversations = JSON.parse(JSON.stringify(data)).data;
        console.log(data);
      })
  }

  // Get sanitized picture
  getBackground(image) {
    let safe_pic = "http://localhost:3000/pictures/" + image
    return this._sanitizer.bypassSecurityTrustStyle(`url(${safe_pic})`);
  }

  // Go to chat room
  goToRoom(id) {
    localStorage.setItem("chatroom", id);
    this.router.navigate(["/room"]);
  }

}
