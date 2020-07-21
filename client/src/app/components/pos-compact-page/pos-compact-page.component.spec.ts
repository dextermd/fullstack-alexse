import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCompactPageComponent } from './pos-compact-page.component';

describe('PosCompactPageComponent', () => {
  let component: PosCompactPageComponent;
  let fixture: ComponentFixture<PosCompactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosCompactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosCompactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
