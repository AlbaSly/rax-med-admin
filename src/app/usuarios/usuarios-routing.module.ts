import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosPageComponent } from './pages/usuarios-page/usuarios-page.component';
import { AppRoutes } from '../shared/constants/routes';
import { UsuarioInfoPageComponent } from './pages/usuario-info-page/usuario-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosPageComponent,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.UsuariosModulePaths.ver,
    component: UsuarioInfoPageComponent,
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
