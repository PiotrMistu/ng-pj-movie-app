import { Injectable } from '@angular/core';
import { MovieRepoService } from '../repository/movie-repo.service';
import { BehaviorSubject } from 'rxjs';
import { Movies } from '../../models/interfaces/movies-list.interface';

@Injectable()
export class MoviesService {
  protected moviesSubject$ = new BehaviorSubject<Movies | null>(null);
  public movies$ = this.moviesSubject$.asObservable();

  public maxPages = 1;
  public currentPage = 1;


  constructor(private moviesRepo: MovieRepoService) {
  }

  public init(): void {
    this.moviesRepo.getMovies(1).subscribe(r => {
      this.maxPages = Math.ceil(Number(r.totalResults) / 10);
      this.currentPage = 1;
      this.moviesSubject$.next(r);
    });
  }

  public getPages(next: boolean): void {
    this.checkIsOnRage(next);
    this.moviesRepo.getMovies(this.currentPage).subscribe(r => {
      this.maxPages = Math.ceil(Number(r.totalResults) / 10);
      this.moviesSubject$.next(r);
    });
  }

  public checkIsOnRage(next: boolean): void {
    if (next) {
      this.currentPage = this.currentPage + 1;
    } else {
      if (this.currentPage - 1 === 0) {
        this.currentPage = 1;
      } else {
        this.currentPage = this.currentPage - 1;
      }
    }

    if (this.maxPages <= this.currentPage) {
      this.currentPage = this.maxPages;
    }
  }

}
