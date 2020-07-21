import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosMarketPageComponent } from './pos-market-page.component';

describe('PosMarketPageComponent', () => {
  let component: PosMarketPageComponent;
  let fixture: ComponentFixture<PosMarketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosMarketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosMarketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
