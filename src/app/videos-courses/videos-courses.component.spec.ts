import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCoursesComponent } from './videos-courses.component';

describe('VideosCoursesComponent', () => {
  let component: VideosCoursesComponent;
  let fixture: ComponentFixture<VideosCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosCoursesComponent]
    });
    fixture = TestBed.createComponent(VideosCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
