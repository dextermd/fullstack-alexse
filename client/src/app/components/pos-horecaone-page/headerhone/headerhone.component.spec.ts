import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderhoneComponent } from './headerhone.component';

describe('HeaderhoneComponent', () => {
  let component: HeaderhoneComponent;
  let fixture: ComponentFixture<HeaderhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
