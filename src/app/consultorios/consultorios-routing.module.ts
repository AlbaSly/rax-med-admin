import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultoriosPageComponent } from './pages/consultorios-page/consultorios-page.component';
import { AppRoutes } from '../shared/constants/routes';
import { ConsultorioInfoPageComponent } from './pages/consultorio-info-page/consultorio-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultoriosPageComponent,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.ConsultoriosModulePaths.ver,
    component: ConsultorioInfoPageComponent,
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultoriosRoutingModule { }
