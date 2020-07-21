import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstfitComponent } from './firstfit.component';

describe('FirstfitComponent', () => {
  let component: FirstfitComponent;
  let fixture: ComponentFixture<FirstfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
