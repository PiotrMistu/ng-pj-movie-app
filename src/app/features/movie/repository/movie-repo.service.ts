import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieRepoService {

  constructor(private httpClient: HttpClient) {
  }

  public getMovies(): Observable<any> {
    const url = 'https://www.omdbapi.com/?s=Arcane';
    return this.httpClient.get<any>(url);
  }
}
