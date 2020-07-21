import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwosupComponent } from './twosup.component';

describe('TwosupComponent', () => {
  let component: TwosupComponent;
  let fixture: ComponentFixture<TwosupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwosupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwosupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
