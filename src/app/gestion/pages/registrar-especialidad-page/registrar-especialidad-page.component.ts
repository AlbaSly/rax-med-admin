import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import { DOMUtils, ReactiveFormsUtils } from 'src/app/shared/utils';
import { GestionValidator } from '../../validators';
import { Router } from '@angular/router';
import { EspecialidadesService } from 'src/app/especialidades/services/especialidades.service';
import { ICrearEspecialidad } from 'src/app/shared/interfaces';
import Swal from 'sweetalert2';
import { AppRoutes } from 'src/app/shared/constants/routes';

@Component({
  selector: 'app-registrar-especialidad-page',
  templateUrl: './registrar-especialidad-page.component.html',
  styleUrls: ['./registrar-especialidad-page.component.scss']
})
export class RegistrarEspecialidadPageComponent implements OnInit{

  AppRoutes = AppRoutes;
  FCNames = EFormControlNames;

  registrarEspecialidadForm: FormGroup = this._fb.group(GestionValidator.RegistrarEspecialidad);

  constructor(
    private readonly _titleService: Title,
    private readonly _fb: FormBuilder,
    private readonly _router: Router,

    private readonly _especialidadesService: EspecialidadesService,
  ) {
    this._titleService.setTitle('Registrar Especialidad');
  }

  ngOnInit(): void {
    setTimeout(() => {
      DOMUtils.scrollToBottom();
    }, 100);
  }

  onSubmit($event: Event): void {
    $event.preventDefault();

    const data: ICrearEspecialidad = {
      ...ReactiveFormsUtils.getControlsAndTheirValues(this.registrarEspecialidadForm),
    }

    this._especialidadesService.crear(data).subscribe((response) => {
      Swal.fire('Correcto', response.msg, 'success');
      this._router.navigateByUrl(this.AppRoutes.EspecialidadesRoutePaths.index);
    });
  }
}
