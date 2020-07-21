import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondflagComponent } from './secondflag.component';

describe('SecondflagComponent', () => {
  let component: SecondflagComponent;
  let fixture: ComponentFixture<SecondflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
