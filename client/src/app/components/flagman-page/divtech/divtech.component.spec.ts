import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivtechComponent } from './divtech.component';

describe('DivtechComponent', () => {
  let component: DivtechComponent;
  let fixture: ComponentFixture<DivtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
