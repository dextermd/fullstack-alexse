import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveresComponent } from './fiveres.component';

describe('FiveresComponent', () => {
  let component: FiveresComponent;
  let fixture: ComponentFixture<FiveresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
