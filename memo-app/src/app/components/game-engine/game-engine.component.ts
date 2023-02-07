import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-engine',
  templateUrl: './game-engine.component.html',
  styleUrls: ['./game-engine.component.scss']
})
export class GameEngineComponent implements OnInit {

  arrayOfLevels = [
    {
      text: "Noob",
      unlock: true,
      time: 50
    },
    {
      text: "Meh",
      unlock: false,
      time: 35
    },
    {
      text: "Okish",
      unlock: false,
      time: 25
    },
    {
      text: "Pro",
      unlock: false,
      time: 15
    },
    {
      text: "God",
      unlock: false,
      time: 10
    },
  ];

  levelSelected = 0;

  increaseLevel() {

    if(this.levelSelected < 4) {
      this.arrayOfLevels[this.levelSelected + 1].unlock = true;
      this.levelSelected++;
    } else {
      alert('YOU WON THE GAME');
    }
  }

  decreaseLevel() {
    if (this.levelSelected !== 0) {
      this.arrayOfLevels[this.levelSelected].unlock = false;
      this.levelSelected--;
    }
  }

  handleGameResult($event: string) {
    $event === "WON" ?
      this.increaseLevel() :
      this.decreaseLevel() ;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
