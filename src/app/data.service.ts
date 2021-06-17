import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private searchString = new BehaviorSubject<string>("");
  currentString = this.searchString.asObservable();

  constructor() { }

  sendString(message: string): void {
    this.searchString.next(message);
  }
}
