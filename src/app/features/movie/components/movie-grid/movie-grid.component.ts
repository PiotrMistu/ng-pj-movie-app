import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie, Movies } from '../../../models/interfaces/movies-list.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {
  @Input() public movies: Observable<Movies | null | undefined> | undefined;
  @Output() public rowSelect = new EventEmitter();

  displayedColumns: string[] = ['Title', 'Type', 'Year'];
  clickedRows = new Set<Movie>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public rowSelectClicked(item: Movie): void {
    this.rowSelect.emit(item);
  }
}
