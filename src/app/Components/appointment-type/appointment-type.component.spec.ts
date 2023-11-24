import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTypeComponent } from './appointment-type.component';

describe('AppointmentTypeComponent', () => {
  let component: AppointmentTypeComponent;
  let fixture: ComponentFixture<AppointmentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
