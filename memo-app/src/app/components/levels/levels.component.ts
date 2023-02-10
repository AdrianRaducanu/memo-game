import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {

  //fontawesome - https://www.npmjs.com/package/@fortawesome/angular-fontawesome
  //git doc - https://github.com/FortAwesome/angular-fontawesome/blob/master/docs/usage/using-other-styles.md

  @Input() arrayOfLevels: any = [
    {
      text: "Noob",
      unlock: true,
      time: 40
    }
  ];
  @Input() selectedLevel: number = 0;

  @Output() emitNewLevel = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectLevel(index: number): void {
    this.emitNewLevel.emit(index);
  }

}
