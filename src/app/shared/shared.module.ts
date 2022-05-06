import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthInterceptorService]
})
export class SharedModule {
}
