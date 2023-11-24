import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpostComponent } from './outpost.component';

describe('OutpostComponent', () => {
  let component: OutpostComponent;
  let fixture: ComponentFixture<OutpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
