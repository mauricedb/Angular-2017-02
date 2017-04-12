import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncMoviesComponent } from './async-movies.component';

describe('AsyncMoviesComponent', () => {
  let component: AsyncMoviesComponent;
  let fixture: ComponentFixture<AsyncMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
