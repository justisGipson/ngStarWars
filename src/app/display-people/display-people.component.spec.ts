import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPeopleComponent } from './display-people.component';

describe('DisplayResultsComponent', () => {
  let component: DisplayPeopleComponent;
  let fixture: ComponentFixture<DisplayPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
