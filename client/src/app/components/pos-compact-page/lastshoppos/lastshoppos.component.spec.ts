import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastshopposComponent } from './lastshoppos.component';

describe('LastshopposComponent', () => {
  let component: LastshopposComponent;
  let fixture: ComponentFixture<LastshopposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastshopposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastshopposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
