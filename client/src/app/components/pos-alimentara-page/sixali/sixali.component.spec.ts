import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixaliComponent } from './sixali.component';

describe('SixaliComponent', () => {
  let component: SixaliComponent;
  let fixture: ComponentFixture<SixaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
