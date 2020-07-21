import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenmarkComponent } from './sevenmark.component';

describe('SevenmarkComponent', () => {
  let component: SevenmarkComponent;
  let fixture: ComponentFixture<SevenmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
