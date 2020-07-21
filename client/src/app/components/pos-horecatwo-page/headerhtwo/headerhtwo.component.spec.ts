import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderhtwoComponent } from './headerhtwo.component';

describe('HeaderhtwoComponent', () => {
  let component: HeaderhtwoComponent;
  let fixture: ComponentFixture<HeaderhtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderhtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderhtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
