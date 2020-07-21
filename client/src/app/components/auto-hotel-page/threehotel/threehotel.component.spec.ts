import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreehotelComponent } from './threehotel.component';

describe('ThreehotelComponent', () => {
  let component: ThreehotelComponent;
  let fixture: ComponentFixture<ThreehotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreehotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
