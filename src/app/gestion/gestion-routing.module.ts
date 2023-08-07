import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from '../shared/constants/routes';

import { RegistrarUsuarioPageComponent } from './pages/registrar-usuario-page/registrar-usuario-page.component'
import { RegistrarEspecialidadPageComponent } from './pages/registrar-especialidad-page/registrar-especialidad-page.component';
import { RegistrarConsultorioPageComponent } from './pages/registrar-consultorio-page/registrar-consultorio-page.component';

const routes: Routes = [
  {
    path: AppRoutes.GestionModulePaths.registrarUsuario,
    component: RegistrarUsuarioPageComponent,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.GestionModulePaths.registrarEspecialidad,
    component: RegistrarEspecialidadPageComponent,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.GestionModulePaths.registrarConsultorio,
    component: RegistrarConsultorioPageComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: AppRoutes.HomeRoutePaths.index,
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
