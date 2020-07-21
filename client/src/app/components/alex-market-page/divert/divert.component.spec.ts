import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivertComponent } from './divert.component';

describe('DivertComponent', () => {
  let component: DivertComponent;
  let fixture: ComponentFixture<DivertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
