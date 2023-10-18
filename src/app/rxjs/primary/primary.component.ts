import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'ts-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss'],
})
export class PrimaryComponent implements OnInit {
  subject: string = '';

  constructor(private service: RxjsService) {}

  ngOnInit(): void {}

  onClick(): void {
    this.service.handleSubject(this.subject);
  }
}
