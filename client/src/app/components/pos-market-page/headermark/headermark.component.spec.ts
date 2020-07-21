import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermarkComponent } from './headermark.component';

describe('HeadermarkComponent', () => {
  let component: HeadermarkComponent;
  let fixture: ComponentFixture<HeadermarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadermarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadermarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
