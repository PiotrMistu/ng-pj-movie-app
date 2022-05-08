import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWatchedComponent } from './last-watched.component';

describe('LastWatchedComponent', () => {
  let component: LastWatchedComponent;
  let fixture: ComponentFixture<LastWatchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastWatchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
