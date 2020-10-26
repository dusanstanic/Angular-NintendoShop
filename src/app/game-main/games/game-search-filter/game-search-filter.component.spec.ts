import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSearchFilterComponent } from './game-search-filter.component';

describe('GameSearchFilterComponent', () => {
  let component: GameSearchFilterComponent;
  let fixture: ComponentFixture<GameSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
