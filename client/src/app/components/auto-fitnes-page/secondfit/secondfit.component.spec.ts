import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondfitComponent } from './secondfit.component';

describe('SecondfitComponent', () => {
  let component: SecondfitComponent;
  let fixture: ComponentFixture<SecondfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
