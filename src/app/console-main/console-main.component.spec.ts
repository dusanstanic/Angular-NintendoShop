import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleMainComponent } from './console-main.component';

describe('ConsoleMainComponent', () => {
  let component: ConsoleMainComponent;
  let fixture: ComponentFixture<ConsoleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
