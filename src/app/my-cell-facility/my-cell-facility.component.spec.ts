import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellFacilityComponent } from './my-cell-facility.component';

describe('MyCellFacilityComponent', () => {
  let component: MyCellFacilityComponent;
  let fixture: ComponentFixture<MyCellFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellFacilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
