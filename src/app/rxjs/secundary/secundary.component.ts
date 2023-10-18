import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'ts-secundary',
  templateUrl: './secundary.component.html',
  styleUrls: ['./secundary.component.scss'],
})
export class SecundaryComponent implements OnInit {
  subject: string = '';
  behaviorSubject$: Observable<boolean>;

  constructor(private service: RxjsService) {
    this.behaviorSubject$ = this.service.isLoggedIn$;
  }

  ngOnInit(): void {
    this.service.dataSubject.subscribe((subject) => {
      this.subject = subject;
    });
  }
}
