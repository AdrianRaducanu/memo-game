import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-engine',
  templateUrl: './game-engine.component.html',
  styleUrls: ['./game-engine.component.scss']
})
export class GameEngineComponent implements OnInit {

  levelSelected = 2;
  arrayOfLevels = [
    {
      text: "Noob",
      unlock: true,
      time: 50
    },
    {
      text: "Meh",
      unlock: true,
      time: 35
    },
    {
      text: "Okish",
      unlock: true,
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

  constructor() { }

  ngOnInit(): void {
  }

  increaseLevel() {
    if(this.levelSelected < 4) {
      this.arrayOfLevels[this.levelSelected + 1].unlock = true;
      this.levelSelected++;
    } else {
      alert('YOU WON THE GAME');
    }
  }

  decreaseLevel() {
    //lets say u unlocked 4 levels and u wanna play lvl1 again. If u lose, all levels above 1 will be locked
    this.arrayOfLevels.forEach((element, index) => {
      index > this.levelSelected ? element.unlock = false : '';
    })

    if (this.levelSelected !== 0) {
      this.arrayOfLevels[this.levelSelected].unlock = false;
      this.levelSelected--;
    } else {
      this.levelSelected = 0;
    }
  }

  handleGameResult($event: string) {
    $event === "WON" ?
      this.increaseLevel() :
      this.decreaseLevel() ;
  }

  handleNewLevelEmitter(index: number) {
    this.levelSelected = index;
  }
}
