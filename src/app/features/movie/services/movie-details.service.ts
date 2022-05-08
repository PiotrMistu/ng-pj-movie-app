import { Injectable } from '@angular/core';
import { MovieRepoService } from '../repository/movie-repo.service';
import { BehaviorSubject } from 'rxjs';
import { MovieDetailsInterface } from '../../models/interfaces/movie-details.interface';
import { LastWatchedService } from '../../../shared/services/last-watched.service';
import { LastWatchedModel } from '../../../shared/model/last-watched.model';

@Injectable()
export class MovieDetailsService {
  protected movieSubject$ = new BehaviorSubject<MovieDetailsInterface | null>(null);
  public movie$ = this.movieSubject$.asObservable();

  constructor(private movieRepo: MovieRepoService,
              private lastWatchedService: LastWatchedService) {
  }

  public init(movieId: string): void {
    this.movieRepo.getMovie(movieId).subscribe(r => {
      this.lastWatchedService.lastWatchedAdd(new LastWatchedModel(r.Title, r?.Poster ?? '', r?.imdbID ?? ''));
      this.movieSubject$.next(r);
    });
  }
}
