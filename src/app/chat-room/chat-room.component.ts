import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  id_conv;

  constructor() {
    this.id_conv = localStorage.getItem("chatroom");
  }

  // Get conv infos
  getConv() {

  }

  ngOnInit() {
  }

}
