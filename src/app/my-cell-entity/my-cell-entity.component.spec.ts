import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellEntityComponent } from './my-cell-entity.component';

describe('MyCellEntityComponent', () => {
  let component: MyCellEntityComponent;
  let fixture: ComponentFixture<MyCellEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellEntityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
