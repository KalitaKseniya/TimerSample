import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public seconds: number = 5;
  constructor() { }

  public launch(text: string) {
    let timerId = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds = this.seconds - 1;
        console.log('Seconds: ', this.seconds);
      }
    }, 1000)

    setTimeout (() => {
      clearInterval(timerId);
      console.log('stop');    
    }, this.seconds * 1000);
    
    return setTimeout(() => {
      alert('Timer stopped from ' + text);
    }, this.seconds * 1000);
  }

  public reset() {
    this.seconds = 5;
  }
}
