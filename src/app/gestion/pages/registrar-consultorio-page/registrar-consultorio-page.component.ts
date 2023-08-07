import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import { GestionValidator } from '../../validators';
import { DOMUtils, ReactiveFormsUtils } from 'src/app/shared/utils';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { ICrearConsultorio } from 'src/app/shared/interfaces';
import { ConsultoriosService } from 'src/app/consultorios/services/consultorios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-consultorio-page',
  templateUrl: './registrar-consultorio-page.component.html',
  styleUrls: ['./registrar-consultorio-page.component.scss']
})
export class RegistrarConsultorioPageComponent implements OnInit {

  AppRoutes = AppRoutes;
  FCNames = EFormControlNames;

  /**FORM GROUP REGISTRAR CONSULTORIO */
  registrarConsultorioForm: FormGroup = this._fb.group(GestionValidator.RegistrarConsultorio);

  constructor(
    private readonly _titleService: Title,
    private readonly _fb: FormBuilder,
    private readonly _router: Router,

    private readonly _consultoriosService: ConsultoriosService,
  ) {
    this._titleService.setTitle('Registrar Consultorio');
  }

  ngOnInit(): void {
    setTimeout(() => {
      DOMUtils.scrollToBottom();
    }, 100);
  }

  onSubmit($event: Event): void {
    $event.preventDefault();

    const data: ICrearConsultorio = {
      ...ReactiveFormsUtils.getControlsAndTheirValues(this.registrarConsultorioForm)
    }

    this._consultoriosService.crear(data).subscribe((response) => {
      Swal.fire('Correcto', response.msg, 'success');
      this._router.navigateByUrl(this.AppRoutes.ConsultoriosRoutePaths.index)
    });
  }
}
