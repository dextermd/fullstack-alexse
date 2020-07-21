import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightaliComponent } from './eightali.component';

describe('EightaliComponent', () => {
  let component: EightaliComponent;
  let fixture: ComponentFixture<EightaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
