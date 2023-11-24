import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityreportComponent } from './entityreport.component';

describe('EntityreportComponent', () => {
  let component: EntityreportComponent;
  let fixture: ComponentFixture<EntityreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
