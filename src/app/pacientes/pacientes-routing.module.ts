import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesPageComponent } from './pages/pacientes-page/pacientes-page.component';
import { AppRoutes } from '../shared/constants/routes';
import { PacienteInfoPageComponent } from './pages/paciente-info-page/paciente-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesPageComponent,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.PacientesModulePaths.ver,
    component: PacienteInfoPageComponent,
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
