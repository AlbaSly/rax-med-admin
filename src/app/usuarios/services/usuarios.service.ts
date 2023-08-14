import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResolveResponse, IUsuarios, InfoUsuario } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private PATH: string = "/usuarios";

  constructor(
    private readonly http: HttpClient,
  ) { }

  catalogo(busqueda?: string): Observable<IResolveResponse<IUsuarios[]>> {
    const url: string = `${this.PATH}/catalogo`;

    const queryParams = new HttpParams().append('busqueda', busqueda ?? "");
    return this.http.get<IResolveResponse<IUsuarios[]>>(url, {params: queryParams});
  }

  info(id: string): Observable<IResolveResponse<InfoUsuario>> {
    const url: string = `${this.PATH}/info/${id}`;

    return this.http.get<IResolveResponse<InfoUsuario>>(url);
  }
}
