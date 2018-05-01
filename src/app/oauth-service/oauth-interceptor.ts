import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { OauthTokenService } from './oauth-token.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public tokenService: OauthTokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes('/oauth/token')) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.tokenService.getAccessToken()
        }
      });
    }
    return next.handle(request);
  }
}
