import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeposComponent } from './threepos.component';

describe('ThreeposComponent', () => {
  let component: ThreeposComponent;
  let fixture: ComponentFixture<ThreeposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
