import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthoneComponent } from './eighthone.component';

describe('EighthoneComponent', () => {
  let component: EighthoneComponent;
  let fixture: ComponentFixture<EighthoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EighthoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
