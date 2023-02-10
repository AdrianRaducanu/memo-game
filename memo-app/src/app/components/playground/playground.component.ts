import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {cardsProperties, Card} from "./cardsProperties";

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
  @Input() timer: number = 50;
  startTimer: boolean = false;
  intervalId: any = '';

  //for the game engine
  @Output() gameResultEventEmitter = new EventEmitter<string>();


  //get & set
  private _levelSelected: number = 0;
  @Input() set levelSelected(lvl: number) {
    this._levelSelected = lvl;

    //i do this in order to clear all the variables and the timer (like a new game)
    this.clearVariables();
    this.getRandomPosition();
    clearInterval(this.intervalId);
  }
  get levelSelected() : number {
    return this._levelSelected;
  }

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
      clearInterval(this.intervalId);
    }
  }

  handleTimer() {
    this.intervalId = setInterval(()=>{
      this.timer -= 1;
      if(!this.timer) {
        this.gameStop = true;
        this.gameResult = "LOST";
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  startNewGame() {
    if(this.levelSelected === 0 && this.gameResult === "LOST") {
      this.timer = 50;
    }
    this.gameResultEventEmitter.emit(this.gameResult);
    this.clearVariables();
    this.getRandomPosition();
  }

  returnTextAfterGameIsFinished() {
    if(this.gameResult === "LOST") {
      return this.levelSelected === 0 ? 'Try again noob!' : 'You are unprepared. Go back';
    } else {
      return this.levelSelected < 4 ? 'Ready for a new challenge?' : '';
    }
  }

  clearVariables() {
    this.gameStop = false;
    this.startTimer = false;
    this.gameResult = '';
    this.canReveal= true;
    this.cardsVisible = [];
  }
}
