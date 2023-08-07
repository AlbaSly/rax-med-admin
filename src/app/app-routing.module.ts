import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './shared/constants/routes';

import { AuthLayoutComponent } from './auth/layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './home/layouts/home-layout/home-layout.component';
import { GestionLayoutComponent } from './gestion/layouts/gestion-layout/gestion-layout.component';

import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { UsuariosLayoutComponent } from './usuarios/layouts/usuarios-layout/usuarios-layout.component';
import { EspecialidadesLayoutComponent } from './especialidades/layouts/especialidades-layout/especialidades-layout.component';
import { ConsultoriosLayoutComponent } from './consultorios/layouts/consultorios-layout/consultorios-layout.component';
import { firstSessionGuard } from './shared/guards/first-session.guard';
import { authGuard } from './shared/guards/auth.guard';
import { MedicosLayoutComponent } from './medicos/layouts/medicos-layout/medicos-layout.component';
import { PacientesLayoutComponent } from './pacientes/layouts/pacientes-layout/pacientes-layout.component';

const routes: Routes = [
  {
    path: AppRoutes.AuthModulePaths.index,
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [firstSessionGuard],
    canActivateChild: [firstSessionGuard]
  },
  {
    path: AppRoutes.HomeModulePaths.index,
    component: HomeLayoutComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [authGuard]
  },
  {
    path: AppRoutes.GestionModulePaths.index,
    component: GestionLayoutComponent,
    loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionModule),
    canActivate: [authGuard]
  },
  {
    path: AppRoutes.UsuariosModulePaths.index,
    component: UsuariosLayoutComponent,
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
    canActivate: [authGuard]
  },
  {
    path: AppRoutes.EspecialidadesModulePaths.index,
    component: EspecialidadesLayoutComponent,
    loadChildren: () => import('./especialidades/especialidades.module').then(m => m.EspecialidadesModule),
    canActivate: [authGuard]
  },
  {
    path: AppRoutes.ConsultoriosModulePaths.index,
    component: ConsultoriosLayoutComponent,
    loadChildren: () => import('./consultorios/consultorios.module').then(m => m.ConsultoriosModule),
    canActivate: [authGuard]
  },
  {
    path: AppRoutes.MedicosModulePaths.index,
    component: MedicosLayoutComponent,
    loadChildren: () => import('./medicos/medicos.module').then(m => m.MedicosModule),
    canActivate: [authGuard]
  },
  {
    path: AppRoutes.PacientesModulePaths.index,
    component: PacientesLayoutComponent,
    loadChildren: () => import('./pacientes/pacientes.module').then(m => m.PacientesModule),
    canActivate: [authGuard]
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: '',
    redirectTo: AppRoutes.AuthRoutePaths.login,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
