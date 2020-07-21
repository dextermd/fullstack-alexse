import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsforComponent } from './solutionsfor.component';

describe('SolutionsforComponent', () => {
  let component: SolutionsforComponent;
  let fixture: ComponentFixture<SolutionsforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
