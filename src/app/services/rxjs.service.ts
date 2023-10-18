import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private sourceSubject = new Subject<string>();
  dataSubject = this.sourceSubject;

  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable()

  constructor() {}

  handleSubject(data: string) {
    this.dataSubject.next(data);
  }

  clear(): void {
    localStorage.clear();
    this.updateBoolean();
  }

  updateBoolean(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.loggedIn.next(true);
      console.log(this.isLoggedIn$)
    } else {
      console.log(this.isLoggedIn$)
      this.loggedIn.next(false);
    }
  }
}
