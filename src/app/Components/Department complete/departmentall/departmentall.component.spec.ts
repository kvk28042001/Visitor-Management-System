import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentallComponent } from './departmentall.component';

describe('DepartmentallComponent', () => {
  let component: DepartmentallComponent;
  let fixture: ComponentFixture<DepartmentallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
