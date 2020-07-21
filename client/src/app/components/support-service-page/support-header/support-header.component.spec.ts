import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportHeaderComponent } from './support-header.component';

describe('SupportHeaderComponent', () => {
  let component: SupportHeaderComponent;
  let fixture: ComponentFixture<SupportHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
