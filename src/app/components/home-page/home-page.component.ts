import { TimerService } from './../../services/timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }

  onClick(text: string){
    this.timerService.launch(text)
  }

  resetTimer(){
    this.timerService.reset();
  }
}
