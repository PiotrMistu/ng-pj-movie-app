import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from '../../services/movie-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details-container',
  templateUrl: './movie-details-container.component.html',
  styleUrls: ['./movie-details-container.component.scss'],
  providers: [MovieDetailsService]
})
export class MovieDetailsContainerComponent implements OnInit {

  constructor(
    public movieDetailsService: MovieDetailsService,
    public activeRouter: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((p) => {
      console.log(p);
      this.movieDetailsService.init(p['id']);
    })
  }

  public backToListHandler(): void {
    this.router.navigate(['movies']);
  }

}
