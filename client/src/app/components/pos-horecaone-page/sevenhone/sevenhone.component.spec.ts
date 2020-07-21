import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenhoneComponent } from './sevenhone.component';

describe('SevenhoneComponent', () => {
  let component: SevenhoneComponent;
  let fixture: ComponentFixture<SevenhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
