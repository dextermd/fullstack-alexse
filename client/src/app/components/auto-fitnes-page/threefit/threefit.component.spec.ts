import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreefitComponent } from './threefit.component';

describe('ThreefitComponent', () => {
  let component: ThreefitComponent;
  let fixture: ComponentFixture<ThreefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
