import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { First52Component } from './first52.component';

describe('First52Component', () => {
  let component: First52Component;
  let fixture: ComponentFixture<First52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ First52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(First52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
