import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenaliComponent } from './sevenali.component';

describe('SevenaliComponent', () => {
  let component: SevenaliComponent;
  let fixture: ComponentFixture<SevenaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
