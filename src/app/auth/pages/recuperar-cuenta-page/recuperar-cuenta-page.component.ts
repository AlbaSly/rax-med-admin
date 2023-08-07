import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthValidator } from '../../validators';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IRecuperarCuenta, IRejectResponse } from 'src/app/shared/interfaces';
import { ReactiveFormsUtils } from 'src/app/shared/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-cuenta-page',
  templateUrl: './recuperar-cuenta-page.component.html',
  styleUrls: ['./recuperar-cuenta-page.component.scss']
})
export class RecuperarCuentaPageComponent {

  recuperarForm: FormGroup = this._fb.group(AuthValidator.RecuperarPassword);

  FCNames = EFormControlNames;
  AppRoutes = AppRoutes;

  constructor(
    private readonly _titleService: Title,
    private readonly _fb: FormBuilder,
    private readonly _router: Router,

    private readonly _authService: AuthService,
  ) {
    this._titleService.setTitle('Recuperar Cuenta');
  }

  onSubmit($event: Event): void {
    $event.preventDefault();

    const data: IRecuperarCuenta = {
      ...ReactiveFormsUtils.getControlsAndTheirValues(this.recuperarForm),      
    }

    this._authService.recuperarCuenta(data).subscribe((response) => {
      Swal.fire('Correcto', response.msg, 'success');

      return response;
    }, (error) => {
      return error;
    });
  }
}
