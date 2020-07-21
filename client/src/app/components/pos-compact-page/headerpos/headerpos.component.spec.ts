import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderposComponent } from './headerpos.component';

describe('HeaderposComponent', () => {
  let component: HeaderposComponent;
  let fixture: ComponentFixture<HeaderposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
