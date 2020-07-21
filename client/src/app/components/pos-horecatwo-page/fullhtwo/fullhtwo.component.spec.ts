import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullhtwoComponent } from './fullhtwo.component';

describe('FullhtwoComponent', () => {
  let component: FullhtwoComponent;
  let fixture: ComponentFixture<FullhtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullhtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullhtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
