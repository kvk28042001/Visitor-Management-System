import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenureportComponent } from './menureport.component';

describe('MenureportComponent', () => {
  let component: MenureportComponent;
  let fixture: ComponentFixture<MenureportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenureportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenureportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
