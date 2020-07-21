import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullaliComponent } from './fullali.component';

describe('FullaliComponent', () => {
  let component: FullaliComponent;
  let fixture: ComponentFixture<FullaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
