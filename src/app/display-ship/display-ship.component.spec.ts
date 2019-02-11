import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShipComponent } from './display-ship.component';

describe('DisplayShipComponent', () => {
  let component: DisplayShipComponent;
  let fixture: ComponentFixture<DisplayShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
