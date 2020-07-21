import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderabComponent } from './headerab.component';

describe('HeaderabComponent', () => {
  let component: HeaderabComponent;
  let fixture: ComponentFixture<HeaderabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
