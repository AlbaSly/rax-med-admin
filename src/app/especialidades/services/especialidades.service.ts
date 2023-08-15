import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICrearEspecialidad, IEspecialidades, IResolveResponse } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {
  private PATH: string = "/especialidades";

  constructor(
    private readonly http: HttpClient,
  ) { }

  crear(data: ICrearEspecialidad): Observable<IResolveResponse<null>> {
    const url: string = `${this.PATH}/crear`;

    return this.http.post<IResolveResponse<null>>(url, data);
  }

  catalogo(busqueda?: string, hideLoader: boolean = false): Observable<IResolveResponse<IEspecialidades[]>> {
    const url: string = `${this.PATH}/catalogo`;

    const queryParams = new HttpParams()
      .append('busqueda', busqueda ?? "")
      .append('hideLoader', hideLoader);
    return this.http.get<IResolveResponse<IEspecialidades[]>>(url, {params: queryParams});
  }
}
