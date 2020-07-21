import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosHorecaonePageComponent } from './pos-horecaone-page.component';

describe('PosHorecaonePageComponent', () => {
  let component: PosHorecaonePageComponent;
  let fixture: ComponentFixture<PosHorecaonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosHorecaonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosHorecaonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
