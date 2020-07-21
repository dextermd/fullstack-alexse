import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B52PageComponent } from './b52-page.component';

describe('B52PageComponent', () => {
  let component: B52PageComponent;
  let fixture: ComponentFixture<B52PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B52PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B52PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
