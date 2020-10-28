import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/User.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface authResponse {
  expiresIn: number;
  token: string;
  userId: number;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  loggedIn = true;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 0);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  register(user: User) {
    return this.http
      .post<authResponse>(`http://localhost:8080/customers/register`, user)
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => {
          console.log(errorResponse);
          let errorMessage = 'Unknown Error';
          if (!errorResponse.error || !errorResponse.error.errorMessage) {
            return throwError(errorMessage);
          }
          errorMessage = errorResponse.error.errorMessage[0];
          return throwError(errorMessage);
        })
      );
  }

  logout() {
    this.loggedIn = false;
  }
}
