import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { NO_TOKEN } from 'src/app/helpers/token.context';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let clonedRequest = req;
    const token = localStorage.getItem('token');

    if (token && !clonedRequest.context.get(NO_TOKEN)) {
      clonedRequest = clonedRequest.clone({
        headers: clonedRequest.headers.set(
          "Authorization", `Bearer ${token}`
        )
      });
    }
    
    return next.handle(clonedRequest);
  }
}