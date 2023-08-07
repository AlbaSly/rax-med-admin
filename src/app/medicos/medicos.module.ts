import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosPageComponent } from './pages/medicos-page/medicos-page.component';
import { ListadoMedicosComponent } from './components/listado-medicos/listado-medicos.component';
import { MedicoInfoCardComponent } from './components/medico-info-card/medico-info-card.component';
import { MedicosLayoutComponent } from './layouts/medicos-layout/medicos-layout.component';


@NgModule({
  declarations: [
    MedicosPageComponent,
    ListadoMedicosComponent,
    MedicoInfoCardComponent,
    MedicosLayoutComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule
  ]
})
export class MedicosModule { }
