import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagmanPageComponent } from './flagman-page.component';

describe('FlagmanPageComponent', () => {
  let component: FlagmanPageComponent;
  let fixture: ComponentFixture<FlagmanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagmanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagmanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
