import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../../models/interfaces/movies-list.interface';
import { MovieDetailsInterface } from '../../models/interfaces/movie-details.interface';

@Injectable()
export class MovieRepoService {

  constructor(private httpClient: HttpClient) {
  }

  public getMovies(name: string,page: number): Observable<Movies> {
    const url = `https://www.omdbapi.com/?page=${page ?? 1}&s=${name}`;
    return this.httpClient.get<Movies>(url);
  }

  public getMoviesType(name: string, page: number, type: string, year?: string): Observable<Movies> {
    let url = '';
    if (year) {
      url = `https://www.omdbapi.com/?page=${page ?? 1}&s=${name}&type=${type}&y=${year}`;
    } else {
      url = `https://www.omdbapi.com/?page=${page ?? 1}&s=${name}&type=${type}`;
    }
    return this.httpClient.get<Movies>(url);
  }

  public getMovie(movieID: string): Observable<MovieDetailsInterface> {
    const url = `https://www.omdbapi.com/?i=${movieID}`;
    return this.httpClient.get<MovieDetailsInterface>(url);
  }
}
