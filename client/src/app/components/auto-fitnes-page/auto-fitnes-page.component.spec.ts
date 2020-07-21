import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFitnesPageComponent } from './auto-fitnes-page.component';

describe('AutoFitnesPageComponent', () => {
  let component: AutoFitnesPageComponent;
  let fixture: ComponentFixture<AutoFitnesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFitnesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFitnesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
