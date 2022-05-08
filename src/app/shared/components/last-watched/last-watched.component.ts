import { Component, OnInit } from '@angular/core';
import { LastWatchedService } from '../../services/last-watched.service';

@Component({
  selector: 'app-last-watched',
  templateUrl: './last-watched.component.html',
  styleUrls: ['./last-watched.component.scss']
})
export class LastWatchedComponent implements OnInit {

  constructor(public lastWatched: LastWatchedService) {
  }

  ngOnInit(): void {
  }

}
