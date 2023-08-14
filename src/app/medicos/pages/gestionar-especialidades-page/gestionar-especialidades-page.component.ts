import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { APIUtils, FormatUtils } from 'src/app/shared/utils';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import { IConsultorios, IEditarMedico, IEspecialidades, IMedicos, IMedicosEspecialidades } from 'src/app/shared/interfaces';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicosService } from '../../services/medicos.service';
import { ConsultoriosService } from 'src/app/consultorios/services/consultorios.service';
import { EspecialidadesService } from 'src/app/especialidades/services/especialidades.service';

@Component({
  selector: 'app-gestionar-especialidades-page',
  templateUrl: './gestionar-especialidades-page.component.html',
  styleUrls: ['./gestionar-especialidades-page.component.scss']
})
export class GestionarEspecialidadesPageComponent implements OnInit {

  AppRoutes = AppRoutes;
  FormatUtils = FormatUtils;
  APIUtils = APIUtils;
  FCNames = EFormControlNames;

  medico: IMedicos;
  listadoEspecialidadesMedico: IMedicosEspecialidades[] = [];

  listadoEspecialidades: IEspecialidades[] = [];
  listadoConsultorios: IConsultorios[] = [];

  loading: boolean = true;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location,

    private readonly _medicosService: MedicosService,
    private readonly _especialidadesService: EspecialidadesService,
    private readonly _consultoriosService: ConsultoriosService,
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];

    this._medicosService.info(id).subscribe(
      (response) => {
        this.medico = response.data;
        
        this._medicosService.listadoEspecialidades(this.medico._id).subscribe(response => this.listadoEspecialidadesMedico = response.data);
      },
      (error) => {
        this._router.navigateByUrl(AppRoutes.MedicosRoutePaths.index);
      },
      () => {
        this.loading = false;
      }
    );
    this._especialidadesService.catalogo().subscribe(response => this.listadoEspecialidades = response.data);
    this._consultoriosService.catalogo().subscribe(response => this.listadoConsultorios = response.data);
  }

  onSubmit($event: Event): void {
    $event.preventDefault();

    
  }

  regresar() {
    this._location.back();
  }
}
