import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  base_url = "http://localhost:3001";
  socket;

  constructor(private http: HttpClient) {
    this.socket = io(this.base_url, { transport: ['websocket'] });
  }

  // Send message
  sendUserMessage(message, id_exp, id_room, id_dest, id_offre) {
    this.socket.emit('send-user', { text: message, id_exp: id_exp, id_room: id_room, id_dest: id_dest, id_offre: id_offre });
  }

  // Join the room
  joinRoom(id_room, nickname) {
    this.socket.connect();
    this.socket.emit('join', { id_room: id_room, nickname: nickname })
  }

  // Get in live messages
  getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }

  // Get in live messages
  getStatusWriting = () => {
    return Observable.create((observer) => {
      this.socket.on('writing', (message) => {
        observer.next(message);
      });
    });
  }

  // Get in live messages
  getStatusNoWriting = () => {
    return Observable.create((observer) => {
      this.socket.on('nowriting', (message) => {
        observer.next(message);
      });
    });
  }

  // Get all messages from db
  getAllMessages(id_room, id_offre) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.get("http://localhost:3000/messages/get/" + id_room + "/" + id_offre, httpOptions);
  }

  // Send writing status
  sendWriting(id, writer_id) {
    this.socket.emit("writing", {
      id_room : id,
      id : writer_id
    });
  }

  // Send stop writing status
  stopWriting(id, writer_id) {
    this.socket.emit("nowriting", {
      id_room : id,
      id : writer_id
    });
  }
}
