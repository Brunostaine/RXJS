import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'ts-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss'],
})
export class PrimaryComponent implements OnInit {
  subject: string = '';
  behaviorSubject$: Observable<boolean>;

  constructor(private service: RxjsService) {
    this.behaviorSubject$ = this.service.isLoggedIn$;
  }

  ngOnInit(): void {
    localStorage.setItem('token', '123');
  }

  onClick(): void {
    this.service.handleSubject(this.subject);
  }

  clear(): void {
    this.service.clear();
    if (!localStorage.getItem('token')) {
      localStorage.setItem('token', '123');
    }
  }

  updateBoolean() {
    this.service.updateBoolean();
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
