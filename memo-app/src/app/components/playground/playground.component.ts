import { Component, OnInit } from '@angular/core';
import {cardsProperties, Card} from "./cardsProperties";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  cardsProperties: Card[] = cardsProperties;
  cardsVisible: Card[] = [];
  gameWon: boolean = false;

  //so the player cant reveal more than 2 cards
  canReveal: boolean = true;

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
    if(this.cardsVisible.length % 2 === 0) {
      this.cardsVisible.push(card);
    } else {
      if (this.cardsVisible[this.cardsVisible.length - 1].image === card.image) {
        this.cardsVisible.push(card);
      } else {
        this.cardsVisible.push(card);
        this.canReveal = false;
        setTimeout(() => {
          this.cardsVisible.pop();
          this.cardsVisible.pop();
          this.canReveal = true;
        }, 3000)
      }
    }
    this.cardsVisible.length === 10 ? this.gameWon = true : null;
  }
}
