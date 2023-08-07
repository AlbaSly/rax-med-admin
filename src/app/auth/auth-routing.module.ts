import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../shared/constants/routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CrearCuentaPageComponent } from './pages/crear-cuenta-page/crear-cuenta-page.component';
import { RecuperarCuentaPageComponent } from './pages/recuperar-cuenta-page/recuperar-cuenta-page.component';

const routes: Routes = [
  {
    path: AppRoutes.AuthModulePaths.login,
    component: LoginPageComponent,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.AuthModulePaths.crearCuenta,
    component: CrearCuentaPageComponent,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.AuthModulePaths.recuperarCuenta,
    component: RecuperarCuentaPageComponent,
  },
  {
    path: '',
    redirectTo: AppRoutes.AuthModulePaths.login,
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
