import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible;
  user;

  constructor() {
    this.visible = new Subject();
    this.user = new Subject();
  }

  hide() {
    this.visible.next("false");
  }

  show() {
    this.visible.next("true");
  }

  setUser(user) {
    this.user.next(user);
  }
}
