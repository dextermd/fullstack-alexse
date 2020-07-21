import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourehtwoComponent } from './fourehtwo.component';

describe('FourehtwoComponent', () => {
  let component: FourehtwoComponent;
  let fixture: ComponentFixture<FourehtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourehtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourehtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
