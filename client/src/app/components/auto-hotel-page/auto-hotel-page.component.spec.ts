import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoHotelPageComponent } from './auto-hotel-page.component';

describe('AutoHotelPageComponent', () => {
  let component: AutoHotelPageComponent;
  let fixture: ComponentFixture<AutoHotelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoHotelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoHotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
