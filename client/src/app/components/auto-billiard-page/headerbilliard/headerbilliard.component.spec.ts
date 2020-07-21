import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbilliardComponent } from './headerbilliard.component';

describe('HeaderbilliardComponent', () => {
  let component: HeaderbilliardComponent;
  let fixture: ComponentFixture<HeaderbilliardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderbilliardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderbilliardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
