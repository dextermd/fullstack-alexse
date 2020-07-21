import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstbilliardComponent } from './firstbilliard.component';

describe('FirstbilliardComponent', () => {
  let component: FirstbilliardComponent;
  let fixture: ComponentFixture<FirstbilliardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstbilliardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstbilliardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
