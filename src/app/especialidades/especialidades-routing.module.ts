import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadesPageComponent } from './pages/especialidades-page/especialidades-page.component';
import { AppRoutes } from '../shared/constants/routes';
import { EspecialidadInfoPageComponent } from './pages/especialidad-info-page/especialidad-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: EspecialidadesPageComponent,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.EspecialidadesModulePaths.ver,
    component: EspecialidadInfoPageComponent,
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialidadesRoutingModule { }
