import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsthotelComponent } from './firsthotel.component';

describe('FirsthotelComponent', () => {
  let component: FirsthotelComponent;
  let fixture: ComponentFixture<FirsthotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsthotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsthotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
