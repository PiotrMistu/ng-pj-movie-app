import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../../models/interfaces/movies-list.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list-container',
  templateUrl: './movie-list-container.component.html',
  styleUrls: ['./movie-list-container.component.scss']
})
export class MovieListContainerComponent implements OnInit {

  constructor(public moviesService: MoviesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.moviesService.init();
  }

  public selectedRowHandler(row: Movie): void {
    this.router.navigate(['movies', 'movie', row.imdbID]);
  }

  public previousHandler(): void {
    this.moviesService.getPages(false);
  }

  public nextHandler(): void {
    this.moviesService.getPages(true);
  }
}
