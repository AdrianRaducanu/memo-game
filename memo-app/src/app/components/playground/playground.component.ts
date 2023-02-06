import { Component, OnInit } from '@angular/core';
import {cardsProperties, Card} from "./cardsProperties";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  cardsProperties: Card[] = cardsProperties;
  cardsVisible: Card[] = [];

  gameStop: boolean = false;
  gameResult: string = '';

  //so the player cant reveal more than 2 cards
  canReveal: boolean = true;

  //timer limit
  timer: number = 1;
  startTimer: boolean = false;
  intervalId: any = '';

  constructor() { }

  ngOnInit(): void {
    this.getRandomPosition();
  }

  getRandomPosition():void {
    this.cardsProperties.forEach((element) => {
      element.randomNo = Math.random();
    });
    this.cardsProperties.sort((a, b)=> a.randomNo - b.randomNo);
  }

  revealACard(card: Card): void {
    //start timer at the first card clicked
    if (!this.startTimer) {
      this.startTimer = true;
      this.handleTimer();
    }

    if(this.cardsVisible.length % 2 === 0) {
      this.cardsVisible.push(card);
    } else {
      if (this.cardsVisible[this.cardsVisible.length - 1].image === card.image) {
        this.cardsVisible.push(card);
      } else {
        this.cardsVisible.push(card);
        this.canReveal = false;
        setTimeout(() => {
          this.cardsVisible.splice(-2);
          this.canReveal = true;
        }, 500);
      }
    }
    if(this.cardsVisible.length === 10) {
      this.gameStop = true;
      this.gameResult = "WON";
      clearInterval(this.intervalId)
    }
  }

  handleTimer() {
    this.intervalId = setInterval(()=>{
      console.log("EOIFJ")
      this.timer -= 1;
      if(!this.timer) {
        this.gameStop = true;
        this.gameResult = "LOST";
        clearInterval(this.intervalId)
      }
    }, 1000);

  }
}
