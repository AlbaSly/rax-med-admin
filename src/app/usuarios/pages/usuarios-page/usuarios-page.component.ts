import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuarios } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.scss']
})
export class UsuariosPageComponent implements OnInit{

  usuarios: IUsuarios[] = [];

  constructor(
    private readonly _usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this._usuariosService.catalogo().subscribe(response => this.usuarios = response.data);
  }
}
