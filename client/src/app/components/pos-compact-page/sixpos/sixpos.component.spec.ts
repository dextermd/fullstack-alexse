import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixposComponent } from './sixpos.component';

describe('SixposComponent', () => {
  let component: SixposComponent;
  let fixture: ComponentFixture<SixposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
