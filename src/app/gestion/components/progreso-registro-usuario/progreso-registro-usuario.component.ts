import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';

@Component({
  selector: 'app-progreso-registro-usuario',
  templateUrl: './progreso-registro-usuario.component.html',
  styleUrls: ['./progreso-registro-usuario.component.scss']
})
export class ProgresoRegistroUsuarioComponent {
  @Input() tipoCuentaForm: FormGroup;
  @Input() formStep: number = 1;

  FCNames = EFormControlNames;
}
