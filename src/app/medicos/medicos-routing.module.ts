import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosPageComponent } from './pages/medicos-page/medicos-page.component';
import { AppRoutes } from '../shared/constants/routes';
import { MedicoInfoPageComponent } from './pages/medico-info-page/medico-info-page.component';
import { EditarMedicoPageComponent } from './pages/editar-medico-page/editar-medico-page.component';
import { GestionarEspecialidadesPageComponent } from './pages/gestionar-especialidades-page/gestionar-especialidades-page.component';

const routes: Routes = [
  {
    path: '',
    component: MedicosPageComponent,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.MedicosModulePaths.ver,
    component: MedicoInfoPageComponent,
    pathMatch: 'prefix'
  },
  {
    path: AppRoutes.MedicosModulePaths.editar,
    component: EditarMedicoPageComponent,
    pathMatch: 'prefix'
  },
  {
    path: AppRoutes.MedicosModulePaths.gestionarEspecialidades,
    component: GestionarEspecialidadesPageComponent,
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
