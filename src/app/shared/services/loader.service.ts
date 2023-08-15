import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private apiCount = 0;
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  constructor() { }

  showLoader() {
    if (this.apiCount === 0) {
      return this.isLoadingSubject.next(true);
    }
    this.apiCount++;
  }

  hideLoader() {
    if (this.apiCount === 0) {
      return this.isLoadingSubject.next(false);
    }
    this.apiCount--;
  }
}
