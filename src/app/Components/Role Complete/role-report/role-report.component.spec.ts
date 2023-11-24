import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleReportComponent } from './role-report.component';

describe('RoleReportComponent', () => {
  let component: RoleReportComponent;
  let fixture: ComponentFixture<RoleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
