import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullmarkComponent } from './fullmark.component';

describe('FullmarkComponent', () => {
  let component: FullmarkComponent;
  let fixture: ComponentFixture<FullmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
