import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellDepartmentComponent } from './my-cell-department.component';

describe('MyCellDepartmentComponent', () => {
  let component: MyCellDepartmentComponent;
  let fixture: ComponentFixture<MyCellDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
