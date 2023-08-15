import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private readonly loaderService: LoaderService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const hideLoader = request.params.has('hideLoader') && request.params.get('hideLoader') === 'true';

    if (!hideLoader) this.loaderService.showLoader();
    
    return next.handle(request).pipe(finalize(() => {
      return this.loaderService.hideLoader();
    }));
  }
}
