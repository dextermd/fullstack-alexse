import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanmarkComponent } from './scanmark.component';

describe('ScanmarkComponent', () => {
  let component: ScanmarkComponent;
  let fixture: ComponentFixture<ScanmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
