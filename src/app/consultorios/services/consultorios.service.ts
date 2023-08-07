import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConsultorios, ICrearConsultorio, IResolveResponse } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConsultoriosService {
  private PATH: string = '/consultorios';

  constructor(
    private readonly http: HttpClient,
  ) { }

  crear(data: ICrearConsultorio): Observable<IResolveResponse<null>> {
    const url: string = `${this.PATH}/crear`;

    return this.http.post<IResolveResponse<null>>(url, data);
  }

  catalogo(): Observable<IResolveResponse<IConsultorios[]>> {
    const url: string = `${this.PATH}/catalogo`;

    return this.http.get<IResolveResponse<IConsultorios[]>>(url);
  }
}