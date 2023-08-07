import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialidadesRoutingModule } from './especialidades-routing.module';
import { EspecialidadesLayoutComponent } from './layouts/especialidades-layout/especialidades-layout.component';
import { EspecialidadesPageComponent } from './pages/especialidades-page/especialidades-page.component';
import { EspecialidadInfoPageComponent } from './pages/especialidad-info-page/especialidad-info-page.component';
import { SharedModule } from '../shared/shared.module';
import { ListadoEspecialidadesComponent } from './components/listado-especialidades/listado-especialidades.component';
import { EspecialidadInfoCardComponent } from './components/especialidad-info-card/especialidad-info-card.component';

@NgModule({
  declarations: [
    EspecialidadesLayoutComponent,
    EspecialidadesPageComponent,
    EspecialidadInfoPageComponent,
    ListadoEspecialidadesComponent,
    EspecialidadInfoCardComponent,
  ],
  imports: [
    CommonModule,
    EspecialidadesRoutingModule,
    SharedModule,
  ]
})
export class EspecialidadesModule { }
