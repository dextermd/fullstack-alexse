import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivehotelComponent } from './fivehotel.component';

describe('FivehotelComponent', () => {
  let component: FivehotelComponent;
  let fixture: ComponentFixture<FivehotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivehotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
