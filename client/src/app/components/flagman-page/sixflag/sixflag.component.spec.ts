import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixflagComponent } from './sixflag.component';

describe('SixflagComponent', () => {
  let component: SixflagComponent;
  let fixture: ComponentFixture<SixflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
