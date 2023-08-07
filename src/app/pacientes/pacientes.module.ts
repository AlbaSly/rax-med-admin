import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesPageComponent } from './page/pacientes-page/pacientes-page.component';
import { ListadoPacientesComponent } from './components/listado-pacientes/listado-pacientes.component';
import { PacienteInfoCardComponent } from './components/paciente-info-card/paciente-info-card.component';
import { PacientesLayoutComponent } from './layouts/pacientes-layout/pacientes-layout.component';


@NgModule({
  declarations: [
  
    PacientesPageComponent,
       ListadoPacientesComponent,
       PacienteInfoCardComponent,
       PacientesLayoutComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
