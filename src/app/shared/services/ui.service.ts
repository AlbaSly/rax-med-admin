import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  private _appTitle: string = "Default";

  constructor() {}

  set setAppTitle(value: string) {
    this._appTitle = value;
  }

  get getAppTitle(): string {
    return this._appTitle;
  }
}