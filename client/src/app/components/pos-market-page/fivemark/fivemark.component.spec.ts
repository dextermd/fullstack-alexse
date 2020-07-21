import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivemarkComponent } from './fivemark.component';

describe('FivemarkComponent', () => {
  let component: FivemarkComponent;
  let fixture: ComponentFixture<FivemarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivemarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
