import { Injectable } from '@angular/core';
import { IUsuarios} from '../interfaces';
import { LISTADO_USUARIOS } from '../data/temp-data';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _listadoUsuarios: Array<IUsuarios> = LISTADO_USUARIOS;

  constructor() { }

  get listadoUsuarios(): Array<IUsuarios> {
    return this._listadoUsuarios;
  }

  getUsuario(): IUsuarios{
    return this._listadoUsuarios[2];
  }
}
