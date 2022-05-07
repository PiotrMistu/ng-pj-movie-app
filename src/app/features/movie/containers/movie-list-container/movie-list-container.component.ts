import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../../models/interfaces/movies-list.interface';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-list-container',
  templateUrl: './movie-list-container.component.html',
  styleUrls: ['./movie-list-container.component.scss']
})
export class MovieListContainerComponent implements OnInit {
  public data: any;
  displayedColumns: string[] = ['Title', 'Type', 'Year'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<Movie>();

  constructor(public moviesService: MoviesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.moviesService.init();
  }

  public selectedList(row: Movie): void {
    this.router.navigate(['movies', 'movie', row.imdbID]);
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},

];

