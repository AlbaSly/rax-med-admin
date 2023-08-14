import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosPageComponent } from './pages/medicos-page/medicos-page.component';
import { ListadoMedicosComponent } from './components/listado-medicos/listado-medicos.component';
import { MedicoInfoCardComponent } from './components/medico-info-card/medico-info-card.component';
import { MedicosLayoutComponent } from './layouts/medicos-layout/medicos-layout.component';
import { SharedModule } from '../shared/shared.module';
import { MedicoInfoPageComponent } from './pages/medico-info-page/medico-info-page.component';
import { EspecialidadesModule } from '../especialidades/especialidades.module';
import { EditarMedicoPageComponent } from './pages/editar-medico-page/editar-medico-page.component';
import { GestionarEspecialidadesPageComponent } from './pages/gestionar-especialidades-page/gestionar-especialidades-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MedicosPageComponent,
    ListadoMedicosComponent,
    MedicoInfoCardComponent,
    MedicosLayoutComponent,
    MedicoInfoPageComponent,
    EditarMedicoPageComponent,
    GestionarEspecialidadesPageComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    ReactiveFormsModule,

    SharedModule,
    EspecialidadesModule,
  ]
})
export class MedicosModule { }
