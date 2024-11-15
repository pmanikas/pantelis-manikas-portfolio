import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): any {
    const token: string = this.authService.getToken();

    const setAuthorizationToken = request.clone({
      headers: request.headers.set('Authorization', `${token}`)
    });

    return next.handle(setAuthorizationToken);
  }
}
