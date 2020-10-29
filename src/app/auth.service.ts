import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserInfo, User, IUserData } from './models/User.model';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';

export interface AuthResponse {
  expiresIn: number;
  token: string;
  userId: number;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  userInfo = new BehaviorSubject<IUserInfo>(null);
  token: string = null;
  private tokenExpirationTimer: any;
  loggedIn = true;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 0);
    });
    return promise;
  }

  register(user: IUser) {
    return this.http
      .post<AuthResponse>(`http://localhost:8080/customers/register`, user)
      .pipe(
        catchError(this.handleError),
        tap((resData) =>
          this.handleAuthentication(
            resData.userId,
            resData.token,
            resData.expiresIn
          )
        )
      );
  }

  autoLogin() {
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
      return;
    }

    const userData: IUserData = JSON.parse(localStorage.getItem('userData'));
    const userId = +localStorage.getItem('userId');
    const expirationDate = localStorage.getItem('expirationDate');
    const loadedUser = new User(
      userData,
      userId,
      token,
      new Date(expirationDate)
    );

    if (loadedUser.token) {
      this.userInfo.next(loadedUser);
      const expirationDuration =
        new Date(expirationDate).getTime() - new Date().getTime();
      console.log(expirationDuration);
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.userInfo.next(null);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);
    let errorMessage = 'Unknown Error';
    if (!errorResponse.error || !errorResponse.error.errorMessage) {
      return throwError(errorMessage);
    }
    errorMessage = errorResponse.error.errorMessage[0];
    return throwError(errorMessage);
  }

  private handleAuthentication(
    userId: number,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const userInfo = new User(null, userId, token, expirationDate);
    this.autoLogout(expiresIn * 1000);
    this.userInfo.next(userInfo);

    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toString());
    localStorage.setItem('userId', userId.toString());

    this.findUserById(userId).subscribe(
      (resData) => {
        let userData = resData;
        localStorage.setItem('userData', JSON.stringify(userData));
        const userInfo = new User(userData, userId, token, expirationDate);
        this.userInfo.next(userInfo);
      },
      (error) => {
        console.log(error);
      }
    );

    // this.userInfo.next(userInfo);
  }

  private findUserById(id: number) {
    return this.http.get<IUserData>('http://localhost:8080/customers/' + id);
  }

  // private findUserById(id: number) {
  //   const tokenStr = 'Bearer ' + localStorage.getItem('token');
  //   return this.http.get<IUserData>('http://localhost:8080/customers/' + id, {
  //     headers: { Authorization: tokenStr },
  //   });
  // }
}
