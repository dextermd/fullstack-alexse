import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRestourantPageComponent } from './auto-restourant-page.component';

describe('AutoRestourantPageComponent', () => {
  let component: AutoRestourantPageComponent;
  let fixture: ComponentFixture<AutoRestourantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoRestourantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoRestourantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
