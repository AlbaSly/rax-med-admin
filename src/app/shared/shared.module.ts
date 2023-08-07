import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PrivateHeaderComponent } from './components/private-header/private-header.component';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { DateInputFieldComponent } from './components/date-input-field/date-input-field.component';
import { SelectInputFieldComponent } from './components/select-input-field/select-input-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';
import { CustomTitleComponent } from './components/custom-title/custom-title.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { InputRefDirectiveDirective, InputUppercaseDirective, TextAreaUppercaseDirective } from './directives';

import { RouterModule } from '@angular/router';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { AccionCardComponent } from './components/accion-card/accion-card.component';
import { FormStepButtonsComponent } from './components/form-step-buttons/form-step-buttons.component';
import { AlertComponent } from './components/alert/alert.component';
import { EstadoPipe, GeneroPipe } from './pipes';
import { DtDdComponent } from './components/dt-dd/dt-dd.component';
import { LineBreakerComponent } from './components/line-breaker/line-breaker.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';


@NgModule({
  declarations: [
    NotFoundPageComponent,

    InputFieldComponent,
    DateInputFieldComponent,
    SelectInputFieldComponent,
    TextareaFieldComponent,
    CustomTitleComponent,
    CustomButtonComponent,

    InputUppercaseDirective,
    TextAreaUppercaseDirective,
    InputRefDirectiveDirective,

    PublicHeaderComponent,
    PrivateHeaderComponent,
    FormWrapperComponent,
    AccionCardComponent,
    FormStepButtonsComponent,
    AlertComponent,

    GeneroPipe,
    EstadoPipe,
    DtDdComponent,
    LineBreakerComponent,
    LoadingScreenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    InputFieldComponent,
    DateInputFieldComponent,
    SelectInputFieldComponent,
    TextareaFieldComponent,
    CustomTitleComponent,
    CustomButtonComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FormWrapperComponent,
    AccionCardComponent,
    FormStepButtonsComponent,
    AlertComponent,
    GeneroPipe,
    EstadoPipe,
    DtDdComponent,
    LineBreakerComponent,
    LoadingScreenComponent,
  ]
})
export class SharedModule { }
