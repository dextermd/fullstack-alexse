import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenposComponent } from './sevenpos.component';

describe('SevenposComponent', () => {
  let component: SevenposComponent;
  let fixture: ComponentFixture<SevenposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
