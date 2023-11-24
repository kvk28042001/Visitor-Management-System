import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellRoleComponent } from './my-cell-role.component';

describe('MyCellRoleComponent', () => {
  let component: MyCellRoleComponent;
  let fixture: ComponentFixture<MyCellRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
