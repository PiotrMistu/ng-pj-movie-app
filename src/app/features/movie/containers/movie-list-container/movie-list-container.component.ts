import { Component, OnInit } from '@angular/core';
import { MovieRepoService } from '../../repository/movie-repo.service';

@Component({
  selector: 'app-movie-list-container',
  templateUrl: './movie-list-container.component.html',
  styleUrls: ['./movie-list-container.component.scss']
})
export class MovieListContainerComponent implements OnInit {
  public data: any;

  constructor(private movieRepoService: MovieRepoService) {
  }

  ngOnInit(): void {
    this.movieRepoService.getMovies().subscribe(r => {
      console.log(r);
      this.data = r;
    });
  }

}
