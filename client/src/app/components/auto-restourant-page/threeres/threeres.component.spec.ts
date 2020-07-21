import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeresComponent } from './threeres.component';

describe('ThreeresComponent', () => {
  let component: ThreeresComponent;
  let fixture: ComponentFixture<ThreeresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
