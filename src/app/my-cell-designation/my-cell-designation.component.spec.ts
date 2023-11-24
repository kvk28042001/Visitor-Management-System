import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellDesignationComponent } from './my-cell-designation.component';

describe('MyCellDesignationComponent', () => {
  let component: MyCellDesignationComponent;
  let fixture: ComponentFixture<MyCellDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellDesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
