import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from '../shared/services/auth-interceptor.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LastWatchedService } from '../shared/services/last-watched.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
  {
    path: 'movies',
    data: {preload: true},
    loadChildren: () => import('../features/movie/movie.module').then(m => m.MovieModule)
  },
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: AuthInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [LastWatchedService],
      useFactory: (s: LastWatchedService) => () => s.load(),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
