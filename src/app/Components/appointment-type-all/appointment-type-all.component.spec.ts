import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTypeAllComponent } from './appointment-type-all.component';

describe('AppointmentTypeAllComponent', () => {
  let component: AppointmentTypeAllComponent;
  let fixture: ComponentFixture<AppointmentTypeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentTypeAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentTypeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
