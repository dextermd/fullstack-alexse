import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondhotelComponent } from './secondhotel.component';

describe('SecondhotelComponent', () => {
  let component: SecondhotelComponent;
  let fixture: ComponentFixture<SecondhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
