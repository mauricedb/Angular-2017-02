import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import  { By } from '@angular/platform-browser';

import { Test123Component } from './test123.component';

describe('Test123Component', () => {
  let component: Test123Component;
  let fixture: ComponentFixture<Test123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test123Component);
    component = fixture.componentInstance;
    fixture.debugElement.query(By.css('#id.class'))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
