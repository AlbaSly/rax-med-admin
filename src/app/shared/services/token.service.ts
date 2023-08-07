import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly LOCAL_STORAGE_APP_KEY = "raxmed-admin-web";
  
  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem(this.LOCAL_STORAGE_APP_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.LOCAL_STORAGE_APP_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_APP_KEY);
  }
}
