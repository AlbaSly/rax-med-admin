import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IUsuarios} from 'src/app/shared/interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent {
  @Input() listadoUsuarios: IUsuarios[] = [];

  constructor(
    private readonly _usuariosService: UsuariosService,
  ) {}

  busqueda($event: string): void {
    this._usuariosService.catalogo($event).subscribe(response => this.listadoUsuarios = response.data);
  }
}
