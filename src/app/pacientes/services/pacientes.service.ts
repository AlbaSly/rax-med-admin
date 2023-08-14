import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
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

  catalogo(busqueda?: string): Observable<IResolveResponse<IPacientes[]>> {
    const url: string = `${this.PATH}/catalogo`;

    const queryParams = new HttpParams().append('busqueda', busqueda ?? "");
    return this.http.get<IResolveResponse<IPacientes[]>>(url, {params: queryParams});
  }

  info(id: string): Observable<IResolveResponse<IPacientes>> {
    const url: string = `${this.PATH}/info/${id}`;

    return this.http.get<IResolveResponse<IPacientes>>(url);
  }
}
