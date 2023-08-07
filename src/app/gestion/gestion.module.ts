import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionLayoutComponent } from './layouts/gestion-layout/gestion-layout.component';
import { RegistrarUsuarioPageComponent } from './pages/registrar-usuario-page/registrar-usuario-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GestionFormsPageWrapperComponent } from './components/gestion-forms-page-wrapper/gestion-forms-page-wrapper.component';
import { ProgresoRegistroUsuarioComponent } from './components/progreso-registro-usuario/progreso-registro-usuario.component';
import { DatosPersonalesFormFieldsetComponent } from './components/datos-personales-form-fieldset/datos-personales-form-fieldset.component';
import { SeleccionTipoCuentaFormFieldsetComponent } from './components/seleccion-tipo-cuenta-form-fieldset/seleccion-tipo-cuenta-form-fieldset.component';
import { CredencialesUsuarioSistemaFormFieldsetComponent } from './components/credenciales-usuario-sistema-form-fieldset/credenciales-usuario-sistema-form-fieldset.component';
import { RegistrarEspecialidadPageComponent } from './pages/registrar-especialidad-page/registrar-especialidad-page.component';
import { RegistrarConsultorioPageComponent } from './pages/registrar-consultorio-page/registrar-consultorio-page.component';

@NgModule({
  declarations: [
    GestionLayoutComponent,
    RegistrarUsuarioPageComponent,
    GestionFormsPageWrapperComponent,
    ProgresoRegistroUsuarioComponent,
    DatosPersonalesFormFieldsetComponent,
    SeleccionTipoCuentaFormFieldsetComponent,
    CredencialesUsuarioSistemaFormFieldsetComponent,
    RegistrarEspecialidadPageComponent,
    RegistrarConsultorioPageComponent,
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    ReactiveFormsModule,
    
    SharedModule,
  ],
  exports: [
    DatosPersonalesFormFieldsetComponent,
  ]
})
export class GestionModule { }
