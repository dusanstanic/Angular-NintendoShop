import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSearchOptionsComponent } from './game-search-options.component';

describe('GameSearchOptionsComponent', () => {
  let component: GameSearchOptionsComponent;
  let fixture: ComponentFixture<GameSearchOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSearchOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSearchOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
