import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { APIHandlers } from 'src/app/shared/handlers';
import { IPacientes, IResolveResponse } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private PATH: string = "/pacientes";

  constructor(
    private readonly http: HttpClient,
  ) { }

  crear(idPersona: string): Observable<IResolveResponse<IPacientes>> {
    const url: string = `${this.PATH}/crear/${idPersona}`;

    return this.http.post<IResolveResponse<IPacientes>>(url, {});
  }
}
