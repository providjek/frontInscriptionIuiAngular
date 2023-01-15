import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {TokenService} from "../_services/token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private  tokenService : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const  token = this.tokenService.getToken();
    if(token != null){
      let cloneRequest = request.clone({
        headers : request.headers.set('Authorization',' bearer '+token)
      })
      console.log(cloneRequest);
      return next.handle(cloneRequest).pipe(
        catchError(
          err => {
            console.log(err);

            if(err.stats===401){
              this.tokenService.tokenExpired();
            }
            return throwError('Session Expired');
          }
        )
      );
    }
    return next.handle(request);
  }
}
export  const  TokenInterceptorProvider = {
  provide : HTTP_INTERCEPTORS,
  useClass : TokenInterceptor,
  multi : true
}
