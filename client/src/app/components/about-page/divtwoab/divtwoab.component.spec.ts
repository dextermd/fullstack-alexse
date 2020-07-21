import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivtwoabComponent } from './divtwoab.component';

describe('DivtwoabComponent', () => {
  let component: DivtwoabComponent;
  let fixture: ComponentFixture<DivtwoabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivtwoabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivtwoabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
