import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityallComponent } from './facilityall.component';

describe('FacilityallComponent', () => {
  let component: FacilityallComponent;
  let fixture: ComponentFixture<FacilityallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
