import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenflagComponent } from './sevenflag.component';

describe('SevenflagComponent', () => {
  let component: SevenflagComponent;
  let fixture: ComponentFixture<SevenflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
