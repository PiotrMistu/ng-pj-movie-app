import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListContainerComponent } from './movie-list-container.component';

describe('MovieListContainerComponent', () => {
  let component: MovieListContainerComponent;
  let fixture: ComponentFixture<MovieListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
