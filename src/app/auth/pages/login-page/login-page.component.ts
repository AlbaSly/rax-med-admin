import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import { AuthValidator } from '../../validators';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { AuthService } from '../../services/auth.service';
import { IIniciarSesion, IRejectResponse } from 'src/app/shared/interfaces';
import { ReactiveFormsUtils } from 'src/app/shared/utils';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm: FormGroup = this._fb.group(AuthValidator.Login);

  FCNames = EFormControlNames;
  AppRoutes = AppRoutes;

  constructor(
    private readonly _titleService: Title,
    private readonly _fb: FormBuilder,
    private readonly _router: Router,

    private readonly _authService: AuthService,
    private readonly _tokenService: TokenService,
  ) {
    this._titleService.setTitle('Iniciar Sesión');
  }

  onSubmit($event: Event): void {
    $event.preventDefault();

    const data: IIniciarSesion = {
      ...ReactiveFormsUtils.getControlsAndTheirValues(this.loginForm)
    };

    /**LLAMADA AL SERVICIO */
    this._authService.iniciarSesion(data).subscribe((response) => {
      const token = response.data;
      this._tokenService.saveToken(token);

      Swal.fire('Correcto', response.msg, 'success');
      this._router.navigateByUrl(AppRoutes.HomeRoutePaths.index);
    }, (error) => {
      return error;
    });
  }
}
