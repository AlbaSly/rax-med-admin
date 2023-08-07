import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultoriosRoutingModule } from './consultorios-routing.module';
import { ConsultoriosLayoutComponent } from './layouts/consultorios-layout/consultorios-layout.component';
import { ConsultoriosPageComponent } from './pages/consultorios-page/consultorios-page.component';
import { ConsultorioInfoPageComponent } from './pages/consultorio-info-page/consultorio-info-page.component';
import { SharedModule } from '../shared/shared.module';
import { ListadoConsultoriosComponent } from './components/listado-consultorios/listado-consultorios.component';
import { ConsultorioInfoCardComponent } from './components/consultorio-info-card/consultorio-info-card.component';


@NgModule({
  declarations: [
    ConsultoriosLayoutComponent,
    ConsultoriosPageComponent,
    ConsultorioInfoPageComponent,
    ListadoConsultoriosComponent,
    ConsultorioInfoCardComponent
  ],
  imports: [
    CommonModule,
    ConsultoriosRoutingModule,
    SharedModule,
  ]
})
export class ConsultoriosModule { }
