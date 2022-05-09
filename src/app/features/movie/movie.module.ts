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
import { MovieDetailsService } from './services/movie-details.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../shared/shared.module';
import { FiltersComponent } from './components/filters/filters.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

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
    MovieDetailsContainerComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    MoviesService,
    MovieRepoService,
    MovieDetailsService
  ]
})
export class MovieModule {
}
