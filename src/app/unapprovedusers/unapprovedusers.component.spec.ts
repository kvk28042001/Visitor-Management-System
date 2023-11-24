import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedusersComponent } from './unapprovedusers.component';

describe('UnapprovedusersComponent', () => {
  let component: UnapprovedusersComponent;
  let fixture: ComponentFixture<UnapprovedusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnapprovedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
