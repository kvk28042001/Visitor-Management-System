import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutCountComponentComponent } from './check-out-count-component.component';

describe('CheckOutCountComponentComponent', () => {
  let component: CheckOutCountComponentComponent;
  let fixture: ComponentFixture<CheckOutCountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutCountComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutCountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
