import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourealiComponent } from './foureali.component';

describe('FourealiComponent', () => {
  let component: FourealiComponent;
  let fixture: ComponentFixture<FourealiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourealiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourealiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
