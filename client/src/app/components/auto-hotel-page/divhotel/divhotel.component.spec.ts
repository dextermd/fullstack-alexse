import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivhotelComponent } from './divhotel.component';

describe('DivhotelComponent', () => {
  let component: DivhotelComponent;
  let fixture: ComponentFixture<DivhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
