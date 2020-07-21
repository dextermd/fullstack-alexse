import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreposComponent } from './morepos.component';

describe('MoreposComponent', () => {
  let component: MoreposComponent;
  let fixture: ComponentFixture<MoreposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
