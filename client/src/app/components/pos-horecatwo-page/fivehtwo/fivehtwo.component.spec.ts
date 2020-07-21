import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivehtwoComponent } from './fivehtwo.component';

describe('FivehtwoComponent', () => {
  let component: FivehtwoComponent;
  let fixture: ComponentFixture<FivehtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivehtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivehtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
