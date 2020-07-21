import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplectflagComponent } from './complectflag.component';

describe('ComplectflagComponent', () => {
  let component: ComplectflagComponent;
  let fixture: ComponentFixture<ComplectflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplectflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplectflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
