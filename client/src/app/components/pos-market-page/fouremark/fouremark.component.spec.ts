import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FouremarkComponent } from './fouremark.component';

describe('FouremarkComponent', () => {
  let component: FouremarkComponent;
  let fixture: ComponentFixture<FouremarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FouremarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FouremarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
