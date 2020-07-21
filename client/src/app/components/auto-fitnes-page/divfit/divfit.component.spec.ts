import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivfitComponent } from './divfit.component';

describe('DivfitComponent', () => {
  let component: DivfitComponent;
  let fixture: ComponentFixture<DivfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
