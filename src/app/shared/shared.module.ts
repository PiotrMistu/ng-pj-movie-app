import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LastWatchedComponent } from './components/last-watched/last-watched.component';

@NgModule({
  declarations: [
    LastWatchedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LastWatchedComponent
  ],
  providers: [AuthInterceptorService]
})
export class SharedModule {
}
