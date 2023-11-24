import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionfromComponent } from './sectionfrom.component';

describe('SectionfromComponent', () => {
  let component: SectionfromComponent;
  let fixture: ComponentFixture<SectionfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
