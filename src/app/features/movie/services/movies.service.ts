import { Injectable } from '@angular/core';
import { MovieRepoService } from '../repository/movie-repo.service';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Movies } from '../../models/interfaces/movies-list.interface';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { DropDownOptionModel } from '../../../shared/model/dropDown.model';

@Injectable()
export class MoviesService {
  protected moviesSubject$ = new BehaviorSubject<Movies | null>(null);
  public movies$ = this.moviesSubject$.asObservable();
  protected typesSubject$ = new BehaviorSubject<DropDownOptionModel[]>([]);
  public types$ = this.typesSubject$.asObservable();

  public maxPages = 1;
  public currentPage = 1;
  public numberOfRecordsOnPage = 10;

  public formGroup = new FormBuilder().group({
    [MoviesFormEnum.name]: ['Batman', Validators.required],
    [MoviesFormEnum.year]: [null],
    [MoviesFormEnum.type]: [null],
  });

  constructor(private moviesRepo: MovieRepoService) {
  }

  public initFilms(): void {

  }

  public init(): void {
    this.movieInit();
    this.formGroup.get(MoviesFormEnum.name)?.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((r) => {
        if (this.formGroup.valid) {
          this.currentPage = 1;
          this.getByTypes();
        }
      });

    this.formGroup.get(MoviesFormEnum.type)?.valueChanges
      .subscribe((r) => {
        this.currentPage = 1;
        this.getByTypes();
      });
    this.formGroup.get(MoviesFormEnum.year)?.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe((r) => {
      if (r !== null) {
        this.currentPage = 1;
        this.getByTypes();
      }
    });
  }

  public resetFilters(): void {
    this.formGroup.get(MoviesFormEnum.year)?.setValue(null);
    this.formGroup.get(MoviesFormEnum.type)?.setValue(null);
  }

  public movieInit(): void {
    this.moviesRepo.getMovies(this.formGroup.get(MoviesFormEnum.name)?.value, 1).subscribe(r => {
      this.maxPages = Math.ceil(Number(r.totalResults) / this.numberOfRecordsOnPage);
      this.typesSubject$.next(
        [
          {text: 'All', value: null},
          {text: 'episode', value: 'episode'},
          {text: 'series', value: 'series'},
          {text: 'game', value: 'game'},
          {text: 'movie', value: 'movie'}
        ]
      )
      this.currentPage = 1;
      this.moviesSubject$.next(r);
    });
  }

  public getByTypes(): void {
    this.moviesRepo.getMoviesType(this.formGroup.get(MoviesFormEnum.name)?.value, this.currentPage, this.formGroup.get(MoviesFormEnum.type)?.value, this.formGroup.get(MoviesFormEnum.year)?.value).subscribe(r => {
      this.maxPages = Math.ceil(Number(r.totalResults) / this.numberOfRecordsOnPage);
      this.moviesSubject$.next(r);
    });
  }

  public getPages(next: boolean): void {
    this.checkIsOnRage(next);
    if (this.formGroup.get(MoviesFormEnum.type)?.value === null) {
      this.moviesRepo.getMovies(this.formGroup.get(MoviesFormEnum.name)?.value, this.currentPage).subscribe(r => {
        this.maxPages = Math.ceil(Number(r.totalResults) / this.numberOfRecordsOnPage);
        this.moviesSubject$.next(r);
      });
    } else {
      this.getByTypes();
    }

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

export enum MoviesFormEnum {
  year = 'year',
  name = 'name',
  type = 'type',
}
