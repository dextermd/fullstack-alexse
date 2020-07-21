import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondbilliardComponent } from './secondbilliard.component';

describe('SecondbilliardComponent', () => {
  let component: SecondbilliardComponent;
  let fixture: ComponentFixture<SecondbilliardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondbilliardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondbilliardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
