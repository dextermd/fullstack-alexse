import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextrabComponent } from './textrab.component';

describe('TextrabComponent', () => {
  let component: TextrabComponent;
  let fixture: ComponentFixture<TextrabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextrabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
