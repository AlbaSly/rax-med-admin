import { HttpClient } from '@angular/common/http';
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

  catalogo(): Observable<IResolveResponse<IEspecialidades[]>> {
    const url: string = `${this.PATH}/catalogo`;

    return this.http.get<IResolveResponse<IEspecialidades[]>>(url);
  }
}
