import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';

@Component({
  selector: 'app-credenciales-usuario-sistema-form-fieldset',
  templateUrl: './credenciales-usuario-sistema-form-fieldset.component.html',
  styleUrls: ['./credenciales-usuario-sistema-form-fieldset.component.scss']
})
export class CredencialesUsuarioSistemaFormFieldsetComponent {
  @Input() credencialesSistemaForm: FormGroup;
  @Input() classes: string;

  FCNames = EFormControlNames;
}
