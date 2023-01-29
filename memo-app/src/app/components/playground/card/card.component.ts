import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {Card} from "../cardsProperties";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {

  @Input() card : Card = {randomNo: 0, image: ""};
  @Input() index: number = 0;

  @ViewChild('card') cardHTML: any;

  isCardRevealed: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.cardHTML.nativeElement.style = `background : url("../../../../assets/CardBg/Asset ${this.card.image}.png")`;
  }

  onClick() {
    this.isCardRevealed = !this.isCardRevealed;
  }

}
