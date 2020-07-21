import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Div52Component } from './div52.component';

describe('Div52Component', () => {
  let component: Div52Component;
  let fixture: ComponentFixture<Div52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Div52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Div52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
