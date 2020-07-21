import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightposComponent } from './eightpos.component';

describe('EightposComponent', () => {
  let component: EightposComponent;
  let fixture: ComponentFixture<EightposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
