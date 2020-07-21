import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourhotelComponent } from './fourhotel.component';

describe('FourhotelComponent', () => {
  let component: FourhotelComponent;
  let fixture: ComponentFixture<FourhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
