import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderflagComponent } from './headerflag.component';

describe('HeaderflagComponent', () => {
  let component: HeaderflagComponent;
  let fixture: ComponentFixture<HeaderflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
