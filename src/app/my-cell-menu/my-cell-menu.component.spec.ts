import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellMenuComponent } from './my-cell-menu.component';

describe('MyCellMenuComponent', () => {
  let component: MyCellMenuComponent;
  let fixture: ComponentFixture<MyCellMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
