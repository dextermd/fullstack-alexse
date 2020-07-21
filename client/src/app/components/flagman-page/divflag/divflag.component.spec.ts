import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivflagComponent } from './divflag.component';

describe('DivflagComponent', () => {
  let component: DivflagComponent;
  let fixture: ComponentFixture<DivflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
