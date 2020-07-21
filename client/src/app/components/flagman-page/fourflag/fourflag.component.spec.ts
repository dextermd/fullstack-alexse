import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourflagComponent } from './fourflag.component';

describe('FourflagComponent', () => {
  let component: FourflagComponent;
  let fixture: ComponentFixture<FourflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
