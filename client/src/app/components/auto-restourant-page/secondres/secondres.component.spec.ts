import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondresComponent } from './secondres.component';

describe('SecondresComponent', () => {
  let component: SecondresComponent;
  let fixture: ComponentFixture<SecondresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
