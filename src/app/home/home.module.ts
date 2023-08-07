import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomePageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    SharedModule,
  ]
})
export class HomeModule { }
