import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveealiComponent } from './fiveeali.component';

describe('FiveealiComponent', () => {
  let component: FiveealiComponent;
  let fixture: ComponentFixture<FiveealiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveealiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveealiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
