import { Component, OnInit } from '@angular/core';
import {cardsProperties, Card} from "./cardsProperties";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  cardsProperties: Card[] = cardsProperties;

  constructor() { }

  ngOnInit(): void {
    this.getRandomPosition();

  }

  getRandomPosition() {
    this.cardsProperties.forEach((element) => {
      element.randomNo = Math.random();
    });
    this.cardsProperties.sort((a, b)=> a.randomNo - b.randomNo);
  }

}
