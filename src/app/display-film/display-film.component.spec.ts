import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFilmComponent } from './display-film.component';

describe('DisplayFilmComponent', () => {
  let component: DisplayFilmComponent;
  let fixture: ComponentFixture<DisplayFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
