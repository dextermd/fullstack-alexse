import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreabComponent } from './moreab.component';

describe('MoreabComponent', () => {
  let component: MoreabComponent;
  let fixture: ComponentFixture<MoreabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
