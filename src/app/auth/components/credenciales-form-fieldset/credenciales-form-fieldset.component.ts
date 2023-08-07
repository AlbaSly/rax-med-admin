import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';

@Component({
  selector: 'app-credenciales-form-fieldset',
  templateUrl: './credenciales-form-fieldset.component.html',
  styleUrls: ['./credenciales-form-fieldset.component.scss']
})
export class CredencialesFormFieldsetComponent {
  @Input() credencialesForm: FormGroup;
  @Input() classes: string;

  FCNames = EFormControlNames;
}
