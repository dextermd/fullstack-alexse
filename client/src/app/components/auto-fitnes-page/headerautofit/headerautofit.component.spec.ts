import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderautofitComponent } from './headerautofit.component';

describe('HeaderautofitComponent', () => {
  let component: HeaderautofitComponent;
  let fixture: ComponentFixture<HeaderautofitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderautofitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderautofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
