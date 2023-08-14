import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { IEditarMedico, IMedicos } from 'src/app/shared/interfaces';
import { FormatUtils, APIUtils, ReactiveFormsUtils } from 'src/app/shared/utils';
import { MedicosService } from '../../services/medicos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicosValidator } from '../../validators';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-medico-page',
  templateUrl: './editar-medico-page.component.html',
  styleUrls: ['./editar-medico-page.component.scss']
})
export class EditarMedicoPageComponent implements OnInit {

  editarForm: FormGroup = this._fb.group(MedicosValidator.Editar);

  AppRoutes = AppRoutes;
  FormatUtils = FormatUtils;
  APIUtils = APIUtils;
  FCNames = EFormControlNames;

  medico: IMedicos;

  loading: boolean = true;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location,

    private readonly _medicosService: MedicosService,
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];

    this._medicosService.info(id).subscribe(
      (response) => {
        this.medico = response.data;
      
        const _horaEntrada = FormatUtils.formatServerDateToHHmm(response.data.horaEntrada);
        const _horaSalida = FormatUtils.formatServerDateToHHmm(response.data.horaSalida);

        this.editarForm.controls[this.FCNames.HORA_ENTRADA].setValue(_horaEntrada);
        this.editarForm.controls[this.FCNames.HORA_SALIDA].setValue(_horaSalida);
      },
      (error) => {
        this._router.navigateByUrl(AppRoutes.MedicosRoutePaths.index);
      },
      () => {
        this.loading = false;
      }
    );
  }

  onSubmit($event: Event): void {
    $event.preventDefault();

    const data: IEditarMedico = {
      ...ReactiveFormsUtils.getControlsAndTheirValues(this.editarForm)
    }

    this._medicosService.editar(this.medico._id, data).subscribe((response) => {
      Swal.fire("Correcto", response.msg, "success");
    });
  }

  regresar(): void {
    this._location.back();
  }
}
