import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPresentComponent } from './movies-present.component';

describe('MoviesPresentComponent', () => {
  let component: MoviesPresentComponent;
  let fixture: ComponentFixture<MoviesPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
