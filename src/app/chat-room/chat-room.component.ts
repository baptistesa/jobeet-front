import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChatRoomService } from './service/chat-room.service';
import { NavbarService } from '../navigation/service/navbar.service';
import { ViewportRuler, ScrollDispatcher, ScrollDispatchModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit, AfterViewInit {

  @ViewChild(CdkVirtualScrollViewport, null)
  public virtualScrollViewport?: CdkVirtualScrollViewport;

  room;
  message = "";
  messages = [];
  role = 0;
  my_id;

  is_writting = false;

  constructor(private http: ChatRoomService, private nav: NavbarService) {
    this.room = JSON.parse(localStorage.getItem("chatroom"));
    localStorage.removeItem("chatroom");
    if (JSON.parse(localStorage.getItem("user")).role == 0)
      this.role = 0;
    else
      this.role = 1;
    console.log("my room = ", this.room)
    this.http.joinRoom(this.room.id, JSON.parse(localStorage.getItem("user")).name);
    this.getAllMessages(this.room.id, this.room.id_offre);
    this.my_id = JSON.parse(localStorage.getItem("user")).id
  }

  // Send message
  sendMessageUser() {
    this.http.stopWriting(this.room.id, JSON.parse(localStorage.getItem("user")).id);
    this.http.sendUserMessage(this.message, JSON.parse(localStorage.getItem("user")).id, this.room.id, this.room.id_recruteur, this.room.id_offre);
    this.message = "";
    this.virtualScrollViewport.scrollTo({ bottom: 0 });
  }

  // Send message as a recruiter
  sendRecruteurUser() {
    this.http.stopWriting(this.room.id, JSON.parse(localStorage.getItem("user")).id);
    this.http.sendUserMessage(this.message, JSON.parse(localStorage.getItem("user")).id, this.room.id, this.room.id_user, this.room.id_offre);
    this.message = "";
    this.virtualScrollViewport.scrollTo({ bottom: 0 });
  }

  // Subscribe to event to receive all messages
  ngOnInit() {
    this.nav.show();
    this.http
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
    this.http
      .getStatusWriting()
      .subscribe((writing) => {
        if (writing.id != JSON.parse(localStorage.getItem("user")).id)
          this.is_writting = true;
      });
    this.http
      .getStatusNoWriting()
      .subscribe((nowriting) => {
        if (nowriting.id != JSON.parse(localStorage.getItem("user")).id)
          this.is_writting = false;
      });
  }

  // Auto scroll at beginning
  ngAfterViewInit() {
    this.virtualScrollViewport.scrollTo({ bottom: 0 });
  }

  // Retrieve all messages
  getAllMessages(id_room, id_offre) {
    this.http.getAllMessages(id_room, id_offre)
      .subscribe(data => {
        this.messages = JSON.parse(JSON.stringify(data)).data
      })
  }

  // Update status - writing or not
  updateStatus(event) {
    if (this.message == "") {
      this.http.stopWriting(this.room.id, JSON.parse(localStorage.getItem("user")).id);
    }
    else {
      this.http.sendWriting(this.room.id, JSON.parse(localStorage.getItem("user")).id);
      setTimeout(() => {
        this.http.stopWriting(this.room.id, JSON.parse(localStorage.getItem("user")).id);
      }, 3000)
    }
  }

  // Send message on key down
  onKeydown(event, id) {
    if (event.key == "Enter" && id == 0)
      this.sendMessageUser()
    else if (event.key == "Enter" && id != 0)
      this.sendRecruteurUser();
  }

}
