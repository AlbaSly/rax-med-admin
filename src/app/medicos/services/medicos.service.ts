import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAgregarEspecialidad, IEditarMedico, IEspecialidades, IMedicos, IMedicosEspecialidades, IPacientes, IResolveResponse } from 'src/app/shared/interfaces';

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

  editar(idMedico: string, data: IEditarMedico): Observable<IResolveResponse<null>> {
    const url: string = `${this.PATH}/editar/${idMedico}`;

    return this.http.patch<IResolveResponse<null>>(url, data);
  }

  agregarEspecialidad(idMedico: string, idEspecialidad: string, idConsultorio: string, data: IAgregarEspecialidad) {
    const url: string = `${this.PATH}/agregar-especialidad/${idMedico}/${idEspecialidad}/${idConsultorio}`;

    return this.http.post<IResolveResponse<null>>(url, data);
  }

  modificarEstadoEspecialidad(idMedicoEspecialidad: string): Observable<IResolveResponse<null>> {
    const url: string = `${this.PATH}/modificar-estado-especialidad/${idMedicoEspecialidad}`;

    return this.http.put<IResolveResponse<null>>(url, {});
  }

  listadoEspecialidades(idMedico: string) {
    const url: string = `${this.PATH}/listado-especialidades/${idMedico}`;

    return this.http.get<IResolveResponse<IMedicosEspecialidades[]>>(url);
  }

  catalogo(busqueda?: string): Observable<IResolveResponse<IMedicos[]>> {
    const url: string = `${this.PATH}/catalogo`;

    const queryParams = new HttpParams().append('busqueda', busqueda ?? "");
    return this.http.get<IResolveResponse<IMedicos[]>>(url, {params: queryParams});
  }

  info(id: string): Observable<IResolveResponse<IMedicos>> {
    const url: string = `${this.PATH}/info/${id}`;

    return this.http.get<IResolveResponse<IMedicos>>(url);
  }
}
