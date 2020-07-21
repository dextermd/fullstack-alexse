import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { More52Component } from './more52.component';

describe('More52Component', () => {
  let component: More52Component;
  let fixture: ComponentFixture<More52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ More52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(More52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
