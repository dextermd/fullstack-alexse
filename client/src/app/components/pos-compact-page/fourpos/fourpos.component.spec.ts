import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourposComponent } from './fourpos.component';

describe('FourposComponent', () => {
  let component: FourposComponent;
  let fixture: ComponentFixture<FourposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
