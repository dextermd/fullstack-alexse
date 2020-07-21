import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderaliComponent } from './headerali.component';

describe('HeaderaliComponent', () => {
  let component: HeaderaliComponent;
  let fixture: ComponentFixture<HeaderaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
