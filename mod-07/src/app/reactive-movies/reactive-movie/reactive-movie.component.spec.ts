import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveMovieComponent } from './reactive-movie.component';

describe('ReactiveMovieComponent', () => {
  let component: ReactiveMovieComponent;
  let fixture: ComponentFixture<ReactiveMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
