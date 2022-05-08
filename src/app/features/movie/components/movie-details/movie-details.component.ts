import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieDetailsInterface } from '../../../models/interfaces/movie-details.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() public movieDetails$: Observable<MovieDetailsInterface | null | undefined> | undefined;
  @Output() public backEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public backToListClicked(): void {
    this.backEmitter.emit(null);
  }
}
