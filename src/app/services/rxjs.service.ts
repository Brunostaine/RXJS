import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private sourceSubject = new Subject<string>();

  dataSubject = this.sourceSubject

  constructor() {}

  handleSubject(data: string) {
    this.sourceSubject.next(data)
  }
}
