import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';

@Component({
  selector: 'app-datos-personales-form-fieldset',
  templateUrl: './datos-personales-form-fieldset.component.html',
  styleUrls: ['./datos-personales-form-fieldset.component.scss']
})
export class DatosPersonalesFormFieldsetComponent {
  @Input() datosPersonalesForm: FormGroup;
  @Input() classes: string;

  FCNames = EFormControlNames;

  /**SELECTS data */
  sexos: Array<{value: string | null, title: string}> = [{
    value: null,
    title: 'Elija una opción',
  },{
    value: 'H',
    title: 'Hombre',
  }, {
    value: 'M',
    title: 'Mujer',
  }];
}
