import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivabComponent } from './divab.component';

describe('DivabComponent', () => {
  let component: DivabComponent;
  let fixture: ComponentFixture<DivabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
