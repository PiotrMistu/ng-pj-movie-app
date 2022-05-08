import { Injectable } from '@angular/core';
import { MovieRepoService } from '../repository/movie-repo.service';
import { BehaviorSubject } from 'rxjs';
import { Movies } from '../../models/interfaces/movies-list.interface';

@Injectable()
export class MoviesService {
  protected moviesSubject$ = new BehaviorSubject<Movies | null>(null);
  public movies$ = this.moviesSubject$.asObservable();

  constructor(private moviesRepo: MovieRepoService) {
  }

  public init(): void {
    this.moviesRepo.getMovies().subscribe(r => {
      this.moviesSubject$.next(r);
    });
  }

}
