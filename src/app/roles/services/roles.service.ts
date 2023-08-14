import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IResolveResponse, IRoles } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private PATH: string = '/roles';

  constructor(
    private readonly http: HttpClient
  ) { }

  catalogo(): Observable<IResolveResponse<IRoles[]>> {
    const url: string = `${this.PATH}/catalogo`;

    return this.http.get<IResolveResponse<IRoles[]>>(url);
  }
}
