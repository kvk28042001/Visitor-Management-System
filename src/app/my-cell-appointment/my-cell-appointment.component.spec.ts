import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellAppointmentComponent } from './my-cell-appointment.component';

describe('MyCellAppointmentComponent', () => {
  let component: MyCellAppointmentComponent;
  let fixture: ComponentFixture<MyCellAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
