import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullhoneComponent } from './fullhone.component';

describe('FullhoneComponent', () => {
  let component: FullhoneComponent;
  let fixture: ComponentFixture<FullhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
