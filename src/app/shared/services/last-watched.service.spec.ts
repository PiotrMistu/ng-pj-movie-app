import { TestBed } from '@angular/core/testing';

import { LastWatchedService } from './last-watched.service';

describe('LastWatchedService', () => {
  let service: LastWatchedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastWatchedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
