import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionReportComponent } from './section-report.component';

describe('SectionReportComponent', () => {
  let component: SectionReportComponent;
  let fixture: ComponentFixture<SectionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
