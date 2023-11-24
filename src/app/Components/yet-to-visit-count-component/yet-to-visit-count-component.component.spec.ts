import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YetToVisitCountComponentComponent } from './yet-to-visit-count-component.component';

describe('YetToVisitCountComponentComponent', () => {
  let component: YetToVisitCountComponentComponent;
  let fixture: ComponentFixture<YetToVisitCountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YetToVisitCountComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YetToVisitCountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
