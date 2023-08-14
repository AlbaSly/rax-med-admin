import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { ListadoPacientesComponent } from './components/listado-pacientes/listado-pacientes.component';
import { PacienteInfoCardComponent } from './components/paciente-info-card/paciente-info-card.component';
import { PacientesLayoutComponent } from './layouts/pacientes-layout/pacientes-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PacientesPageComponent } from './pages/pacientes-page/pacientes-page.component';
import { PacienteInfoPageComponent } from './pages/paciente-info-page/paciente-info-page.component';


@NgModule({
  declarations: [
    ListadoPacientesComponent,
    PacienteInfoCardComponent,
    PacientesLayoutComponent,
    PacientesPageComponent,
    PacienteInfoPageComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,

    SharedModule,
  ]
})
export class PacientesModule { }
