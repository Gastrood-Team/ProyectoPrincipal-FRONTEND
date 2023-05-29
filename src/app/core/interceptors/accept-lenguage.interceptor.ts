import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AcceptLenguageInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let clonedRequest = req;
    const storedLanguage = localStorage.getItem('selectedLanguage');

    if (storedLanguage) {
        clonedRequest = clonedRequest.clone({
            headers: clonedRequest.headers.set(
                "Accept-Language", storedLanguage
            )
        });
    }

    return next.handle(clonedRequest);
  }
}