import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplectComponent } from './complect.component';

describe('ComplectComponent', () => {
  let component: ComplectComponent;
  let fixture: ComponentFixture<ComplectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
