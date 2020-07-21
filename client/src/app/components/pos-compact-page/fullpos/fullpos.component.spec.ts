import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullposComponent } from './fullpos.component';

describe('FullposComponent', () => {
  let component: FullposComponent;
  let fixture: ComponentFixture<FullposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
