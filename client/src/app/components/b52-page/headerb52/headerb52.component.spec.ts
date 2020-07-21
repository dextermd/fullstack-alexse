import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerb52Component } from './headerb52.component';

describe('Headerb52Component', () => {
  let component: Headerb52Component;
  let fixture: ComponentFixture<Headerb52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headerb52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headerb52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
