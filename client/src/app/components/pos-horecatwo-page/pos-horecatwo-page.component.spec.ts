import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosHorecatwoPageComponent } from './pos-horecatwo-page.component';

describe('PosHorecatwoPageComponent', () => {
  let component: PosHorecatwoPageComponent;
  let fixture: ComponentFixture<PosHorecatwoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosHorecatwoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosHorecatwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
