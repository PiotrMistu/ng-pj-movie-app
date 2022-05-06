import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRepoService } from './repository/movie-repo.service';
import { MovieListContainerComponent } from './containers/movie-list-container/movie-list-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MovieListContainerComponent
  }
]

@NgModule({
  declarations: [
    MovieListContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [MovieRepoService]
})
export class MovieModule {
}
