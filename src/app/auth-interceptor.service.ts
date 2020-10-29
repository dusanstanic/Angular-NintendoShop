import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.userInfo.pipe(
      take(1),
      exhaustMap((userInfo) => {
        console.log('User info ');
        console.dir(userInfo);
        if (userInfo) {
          const tokenStr = 'Bearer ' + localStorage.getItem('token');
          const modifiedRequest = req.clone({
            headers: new HttpHeaders().set('Authorization', tokenStr),
          });
          return next.handle(modifiedRequest);
        }
        return next.handle(req);
      })
    );
  }
}
