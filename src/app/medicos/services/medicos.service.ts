import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { APIHandlers } from 'src/app/shared/handlers';
import { IMedicos, IPacientes, IResolveResponse } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private PATH: string = "/medicos";

  constructor(
    private readonly http: HttpClient,
  ) { }

  crear(idPersona: string) {
    const url: string = `${this.PATH}/crear/${idPersona}`;

    return this.http.post<IResolveResponse<IPacientes>>(url, {});
  }
}
