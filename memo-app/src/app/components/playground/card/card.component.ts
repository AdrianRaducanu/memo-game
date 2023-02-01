import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Card} from "../cardsProperties";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {

  @Input() card : Card = {id: 0, randomNo: 0, image: ""};
  @Input() canReveal: boolean = true;

  private _isRevealed: boolean = false;
  @Input() set isRevealed(cond: boolean) {
    this._isRevealed = cond;
  }
  get isRevealed() {
    return this._isRevealed;
  }


  @Output() revealACard: any = new EventEmitter<Card>();

  @ViewChild('card') cardHTML: any;

  constructor() { }

  ngAfterViewInit() {
    this.cardHTML.nativeElement.style = `background : url("../../../../assets/CardBg/Asset ${this.card.image}.png")`;
  }

  onClick() {
    this.revealACard.emit(this.card);
  }

  //Lvl hard - u cant see the second card until its a pair
  // shouldCardBeRevealed(): boolean {
  //   if(this.firstCard === this.card) {
  //     return true;
  //   }
  //   return this.cardsPair.includes(this.card.image);
  // }

}
