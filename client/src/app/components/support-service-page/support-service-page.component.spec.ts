import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportServicePageComponent } from './support-service-page.component';

describe('SupportServicePageComponent', () => {
  let component: SupportServicePageComponent;
  let fixture: ComponentFixture<SupportServicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportServicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
