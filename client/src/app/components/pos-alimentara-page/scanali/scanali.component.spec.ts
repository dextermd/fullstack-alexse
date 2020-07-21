import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanaliComponent } from './scanali.component';

describe('ScanaliComponent', () => {
  let component: ScanaliComponent;
  let fixture: ComponentFixture<ScanaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
