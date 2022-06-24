import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

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
