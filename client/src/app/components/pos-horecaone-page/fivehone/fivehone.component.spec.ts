import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivehoneComponent } from './fivehone.component';

describe('FivehoneComponent', () => {
  let component: FivehoneComponent;
  let fixture: ComponentFixture<FivehoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivehoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivehoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
