import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRepoService } from './repository/movie-repo.service';
import { MovieListContainerComponent } from './containers/movie-list-container/movie-list-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MoviesService } from './services/movies.service';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsContainerComponent } from './containers/movie-details-container/movie-details-container.component';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  {
    path: '',
    component: MovieListContainerComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsContainerComponent
  }
]

@NgModule({
  declarations: [
    MovieListContainerComponent,
    MovieGridComponent,
    MovieDetailsComponent,
    MovieDetailsContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    MoviesService,
    MovieRepoService
  ]
})
export class MovieModule {
}
