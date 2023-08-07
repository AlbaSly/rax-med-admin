import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIniciarSesion, INuevaContrasena, IRecuperarCuenta, IRegistrar, IResolveResponse, IUsuarios } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private PATH: string = "/auth";

  constructor(
    private readonly http: HttpClient,
  ) { }

  registrar(data: IRegistrar): Observable<IResolveResponse<null>> {
    const url: string = `${this.PATH}/registrar`;

    return this.http.post<IResolveResponse<null>>(url, data);
  }

  iniciarSesion(data: IIniciarSesion) {
    const url: string = `${this.PATH}/iniciar-sesion/${environment.appID}`;

    return this.http.post<IResolveResponse<string>>(url, data);
  }

  recuperarCuenta(data: IRecuperarCuenta) {
    const url: string = `${this.PATH}/recuperar-cuenta`;

    return this.http.post<IResolveResponse<null>>(url, data);
  }

  nuevaContrasena(data: INuevaContrasena) {
    const url: string = `${this.PATH}/nueva-contrasena`;

    return this.http.post<IResolveResponse<null>>(url, data);
  }

  obtenerUsuarioData(jwt_token: string) {
    const url: string = `${this.PATH}/datos`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwt_token}`);
    
    return this.http.get<IResolveResponse<IUsuarios>>(url, {headers});
  }
}
