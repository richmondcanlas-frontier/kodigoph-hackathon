import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private dataSubject = new Subject<any>();
  data$ = this.dataSubject.asObservable();

  private clearSubject = new Subject();
  clear$ = this.clearSubject.asObservable();

  emitData(data: any) {
    this.dataSubject.next(data);
  }

  clearData(){
    this.clearSubject.next();
  }
}
