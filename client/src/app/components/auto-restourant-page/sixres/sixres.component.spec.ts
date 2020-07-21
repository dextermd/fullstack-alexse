import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixresComponent } from './sixres.component';

describe('SixresComponent', () => {
  let component: SixresComponent;
  let fixture: ComponentFixture<SixresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
