import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEngineComponent } from './game-engine.component';

describe('GameEngineComponent', () => {
  let component: GameEngineComponent;
  let fixture: ComponentFixture<GameEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameEngineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
