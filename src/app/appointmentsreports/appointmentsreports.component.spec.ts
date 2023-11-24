import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsreportsComponent } from './appointmentsreports.component';

describe('AppointmentsreportsComponent', () => {
  let component: AppointmentsreportsComponent;
  let fixture: ComponentFixture<AppointmentsreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
