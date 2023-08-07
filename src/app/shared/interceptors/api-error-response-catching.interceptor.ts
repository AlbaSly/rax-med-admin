import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IRejectResponse } from '../interfaces';
import Swal from 'sweetalert2';

@Injectable()
export class ApiErrorResponseCatchingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorName: string = "Error";
        let errorMessage: string = '';
        if (error.error instanceof ErrorEvent) {
          console.error('[CLIENT]', error.error.message);
          errorMessage = `Error: ${error.error.message}`;

          Swal.fire(errorName, error.error.message, "error");
        } else {
          const serverError: IRejectResponse = error.error;
          console.log('[SERVER]', serverError.msg);
          errorMessage = `API Error with status code: [${serverError.statusCode}] =>  ${serverError.msg}`;

          switch (serverError.statusCode) {
            case 400:
              errorName = "Hubo un error";
              break;
            case 401:
              errorName = "Sin autorización";
              break;
            case 403:
              errorName = "No permitido";
              break;
            case 404:
              errorName = "No encontrado";
              break;
            case 500:
              errorName = "Error interno del servidor";
              break;
            default:
              break;
          }
          Swal.fire(errorName, serverError.msg, 'error');
        }
        return throwError(errorMessage);
      })
    )
  }
}
