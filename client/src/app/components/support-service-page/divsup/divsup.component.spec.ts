import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivsupComponent } from './divsup.component';

describe('DivsupComponent', () => {
  let component: DivsupComponent;
  let fixture: ComponentFixture<DivsupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivsupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
