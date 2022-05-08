import { Component, OnInit } from '@angular/core';
import { LastWatchedService } from '../../services/last-watched.service';
import { Router } from '@angular/router';
import { LastWatchedModel } from '../../model/last-watched.model';

@Component({
  selector: 'app-last-watched',
  templateUrl: './last-watched.component.html',
  styleUrls: ['./last-watched.component.scss']
})
export class LastWatchedComponent implements OnInit {

  constructor(public lastWatched: LastWatchedService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public clickRow(item: LastWatchedModel): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.router.navigate(['movies', 'movie', item.id]);
  }

}
