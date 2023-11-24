import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellUserComponent } from './my-cell-user.component';

describe('MyCellUserComponent', () => {
  let component: MyCellUserComponent;
  let fixture: ComponentFixture<MyCellUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
