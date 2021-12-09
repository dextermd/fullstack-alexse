import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernizationComponent } from './modernization.component';

describe('ModernizationComponent', () => {
  let component: ModernizationComponent;
  let fixture: ComponentFixture<ModernizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
