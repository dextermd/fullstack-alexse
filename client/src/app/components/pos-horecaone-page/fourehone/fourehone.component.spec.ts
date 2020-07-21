import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourehoneComponent } from './fourehone.component';

describe('FourehoneComponent', () => {
  let component: FourehoneComponent;
  let fixture: ComponentFixture<FourehoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourehoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourehoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
