import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Second52Component } from './second52.component';

describe('Second52Component', () => {
  let component: Second52Component;
  let fixture: ComponentFixture<Second52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Second52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Second52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
