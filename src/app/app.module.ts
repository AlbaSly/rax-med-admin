import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localEs from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs, 'es');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiPrefixInterceptor } from './shared/interceptors/api-prefix.interceptor';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { ApiErrorResponseCatchingInterceptor } from './shared/interceptors/api-error-response-catching.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorResponseCatchingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
