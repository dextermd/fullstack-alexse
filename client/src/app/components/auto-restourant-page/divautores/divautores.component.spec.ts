import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivautoresComponent } from './divautores.component';

describe('DivautoresComponent', () => {
  let component: DivautoresComponent;
  let fixture: ComponentFixture<DivautoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivautoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivautoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
