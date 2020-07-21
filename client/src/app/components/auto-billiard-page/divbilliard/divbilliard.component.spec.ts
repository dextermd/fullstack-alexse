import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivbilliardComponent } from './divbilliard.component';

describe('DivbilliardComponent', () => {
  let component: DivbilliardComponent;
  let fixture: ComponentFixture<DivbilliardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivbilliardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivbilliardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
