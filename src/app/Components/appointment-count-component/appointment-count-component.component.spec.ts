import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCountComponentComponent } from './appointment-count-component.component';

describe('AppointmentCountComponentComponent', () => {
  let component: AppointmentCountComponentComponent;
  let fixture: ComponentFixture<AppointmentCountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentCountComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentCountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
