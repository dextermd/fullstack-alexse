import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourresComponent } from './fourres.component';

describe('FourresComponent', () => {
  let component: FourresComponent;
  let fixture: ComponentFixture<FourresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
