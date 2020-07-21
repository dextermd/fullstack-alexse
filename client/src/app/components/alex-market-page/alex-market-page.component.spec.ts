import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexMarketPageComponent } from './alex-market-page.component';

describe('AlexMarketPageComponent', () => {
  let component: AlexMarketPageComponent;
  let fixture: ComponentFixture<AlexMarketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexMarketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexMarketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
