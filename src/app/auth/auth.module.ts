import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearCuentaPageComponent } from './pages/crear-cuenta-page/crear-cuenta-page.component';
import { RecuperarCuentaPageComponent } from './pages/recuperar-cuenta-page/recuperar-cuenta-page.component';
import { DatosPersonalesFormFieldsetComponent } from './components/datos-personales-form-fieldset/datos-personales-form-fieldset.component';
import { CredencialesFormFieldsetComponent } from './components/credenciales-form-fieldset/credenciales-form-fieldset.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    CrearCuentaPageComponent,
    RecuperarCuentaPageComponent,
    DatosPersonalesFormFieldsetComponent,
    CredencialesFormFieldsetComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    
    SharedModule,
  ]
})
export class AuthModule { }
