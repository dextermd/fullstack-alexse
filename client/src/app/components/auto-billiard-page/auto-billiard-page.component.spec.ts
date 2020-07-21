import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoBilliardPageComponent } from './auto-billiard-page.component';

describe('AutoBilliardPageComponent', () => {
  let component: AutoBilliardPageComponent;
  let fixture: ComponentFixture<AutoBilliardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoBilliardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoBilliardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
