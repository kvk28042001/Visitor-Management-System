import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellappointmentTypeComponent } from './my-cellappointment-type.component';

describe('MyCellappointmentTypeComponent', () => {
  let component: MyCellappointmentTypeComponent;
  let fixture: ComponentFixture<MyCellappointmentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellappointmentTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellappointmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
