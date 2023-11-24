import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecellrendererComponent } from './imagecellrenderer.component';

describe('ImagecellrendererComponent', () => {
  let component: ImagecellrendererComponent;
  let fixture: ComponentFixture<ImagecellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagecellrendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagecellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
