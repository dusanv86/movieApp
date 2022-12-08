import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiClone = request.clone({
      url: `${environment.apiBaseUrl}${request.url}`,
      params: request.params.set('api_key', environment.apiKey)
    })
    return next.handle(apiClone);
  }
}


// @Injectable()
// export class Interceptor implements HttpInterceptor {
//   constructor() { }
//   const redirectRequest = request.clone({ url: 'http://192.168.1.192:8080/restaurant/getServerData', method: "get" });
//        return next.handle(redirectRequest);
//  }
