import { TestBed } from '@angular/core/testing';

import { MovieRepoService } from './movie-repo.service';

describe('MovieRepoService', () => {
  let service: MovieRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
