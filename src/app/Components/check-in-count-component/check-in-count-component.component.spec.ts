import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInCountComponentComponent } from './check-in-count-component.component';

describe('CheckInCountComponentComponent', () => {
  let component: CheckInCountComponentComponent;
  let fixture: ComponentFixture<CheckInCountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInCountComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckInCountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
