import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixhoneComponent } from './sixhone.component';

describe('SixhoneComponent', () => {
  let component: SixhoneComponent;
  let fixture: ComponentFixture<SixhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
