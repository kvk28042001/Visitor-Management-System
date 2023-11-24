import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentfromComponent } from './departmentfrom.component';

describe('DepartmentfromComponent', () => {
  let component: DepartmentfromComponent;
  let fixture: ComponentFixture<DepartmentfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
