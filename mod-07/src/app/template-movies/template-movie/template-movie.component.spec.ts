import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMovieComponent } from './template-movie.component';

describe('TemplateMovieComponent', () => {
  let component: TemplateMovieComponent;
  let fixture: ComponentFixture<TemplateMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
