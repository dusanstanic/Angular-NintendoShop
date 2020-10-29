import { AuthResponse } from '../auth.service';

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  streetNumber: string;
  phone: string;
  postalCode: number;
  email: string;
  gender: string;
  password: string;
}

export interface IUserInfo {
  userData: IUserData;
  userId: number;
  token: string;
}

export interface IUserData {
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  streetNumber: string;
  phone: string;
  postalCode: number;
  email: string;
  gender: string;
}

export class User {
  constructor(
    public userData: IUserData,
    public userId: number,
    public _token: string,
    public _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
