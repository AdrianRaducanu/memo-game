import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { LevelsComponent } from './components/levels/levels.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    LevelsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
