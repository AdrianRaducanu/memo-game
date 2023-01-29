import { Component, OnInit } from '@angular/core';
import {faLock, faUnlock} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {

  //fontawesome - https://www.npmjs.com/package/@fortawesome/angular-fontawesome
  //git doc - https://github.com/FortAwesome/angular-fontawesome/blob/master/docs/usage/using-other-styles.md

  arrayOfLevels: string[] = ["Noob", "Meh", "Okish", "Pro", "God"];
  faLock = faLock;
  faUnlock = faUnlock;

  constructor() { }

  ngOnInit(): void {
  }

}
