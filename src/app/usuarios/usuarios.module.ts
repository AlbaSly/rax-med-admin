import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioInfoPageComponent } from './pages/usuario-info-page/usuario-info-page.component';
import { UsuariosLayoutComponent } from './layouts/usuarios-layout/usuarios-layout.component';
import { UsuariosPageComponent } from './pages/usuarios-page/usuarios-page.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { UsuarioInfoCardComponent } from './components/usuario-info-card/usuario-info-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsuariosLayoutComponent,
    UsuarioInfoPageComponent,
    UsuariosPageComponent,
    ListadoUsuariosComponent,
    UsuarioInfoCardComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
  ]
})
export class UsuariosModule { }
