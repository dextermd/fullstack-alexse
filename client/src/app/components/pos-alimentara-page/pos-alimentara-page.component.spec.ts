import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAlimentaraPageComponent } from './pos-alimentara-page.component';

describe('PosAlimentaraPageComponent', () => {
  let component: PosAlimentaraPageComponent;
  let fixture: ComponentFixture<PosAlimentaraPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosAlimentaraPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosAlimentaraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
