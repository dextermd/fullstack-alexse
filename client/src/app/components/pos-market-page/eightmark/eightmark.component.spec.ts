import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightmarkComponent } from './eightmark.component';

describe('EightmarkComponent', () => {
  let component: EightmarkComponent;
  let fixture: ComponentFixture<EightmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
