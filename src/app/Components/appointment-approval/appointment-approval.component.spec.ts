import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentApprovalComponent } from './appointment-approval.component';

describe('AppointmentApprovalComponent', () => {
  let component: AppointmentApprovalComponent;
  let fixture: ComponentFixture<AppointmentApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
