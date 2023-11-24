import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellEmployeeComponent } from './my-cell-employee.component';

describe('MyCellEmployeeComponent', () => {
  let component: MyCellEmployeeComponent;
  let fixture: ComponentFixture<MyCellEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
