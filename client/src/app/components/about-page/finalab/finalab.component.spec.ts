import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalabComponent } from './finalab.component';

describe('FinalabComponent', () => {
  let component: FinalabComponent;
  let fixture: ComponentFixture<FinalabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
