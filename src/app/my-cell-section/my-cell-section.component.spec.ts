import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellSectionComponent } from './my-cell-section.component';

describe('MyCellSectionComponent', () => {
  let component: MyCellSectionComponent;
  let fixture: ComponentFixture<MyCellSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
