import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeflagComponent } from './treeflag.component';

describe('TreeflagComponent', () => {
  let component: TreeflagComponent;
  let fixture: ComponentFixture<TreeflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
