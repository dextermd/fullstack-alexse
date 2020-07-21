import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixmarkComponent } from './sixmark.component';

describe('SixmarkComponent', () => {
  let component: SixmarkComponent;
  let fixture: ComponentFixture<SixmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
