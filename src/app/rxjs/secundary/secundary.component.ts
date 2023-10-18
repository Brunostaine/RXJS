import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'ts-secundary',
  templateUrl: './secundary.component.html',
  styleUrls: ['./secundary.component.scss'],
})
export class SecundaryComponent implements OnInit {

  subject$: string = '';

  constructor(private service: RxjsService) {}

  ngOnInit(): void {
    this.service.dataSubject.subscribe((subject) => {
      this.subject$ = subject;
    });
  }

}
