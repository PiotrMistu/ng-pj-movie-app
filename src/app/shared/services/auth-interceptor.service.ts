import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      url: req.url + '&apikey=bf5769f2'
    });
    return next.handle(authReq);
  }
}
