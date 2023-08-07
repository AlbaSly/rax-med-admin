import { Injectable } from '@angular/core';
import { IUsuarios } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private _isLoggedIn: boolean = false;
  private _me: IUsuarios;

  constructor() { }

  get me(): IUsuarios {
    return this._me;
  }

  set setMyProfile(me: IUsuarios) {
    this._me = me;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}
