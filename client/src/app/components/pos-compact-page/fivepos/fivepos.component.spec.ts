import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveposComponent } from './fivepos.component';

describe('FiveposComponent', () => {
  let component: FiveposComponent;
  let fixture: ComponentFixture<FiveposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
