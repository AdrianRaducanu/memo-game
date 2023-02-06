import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { LevelsComponent } from './components/levels/levels.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/playground/card/card.component';
import { GameEngineComponent } from './components/game-engine/game-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    LevelsComponent,
    CardComponent,
    GameEngineComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
