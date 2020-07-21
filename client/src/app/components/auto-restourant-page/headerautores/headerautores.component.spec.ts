import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderautoresComponent } from './headerautores.component';

describe('HeaderautoresComponent', () => {
  let component: HeaderautoresComponent;
  let fixture: ComponentFixture<HeaderautoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderautoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderautoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
