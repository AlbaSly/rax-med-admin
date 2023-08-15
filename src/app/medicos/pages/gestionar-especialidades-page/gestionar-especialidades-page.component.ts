import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { APIUtils, FormatUtils, ReactiveFormsUtils } from 'src/app/shared/utils';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import { IAgregarEspecialidad, IConsultorios, IEditarMedico, IEspecialidades, IMedicos, IMedicosEspecialidades } from 'src/app/shared/interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicosService } from '../../services/medicos.service';
import { ConsultoriosService } from 'src/app/consultorios/services/consultorios.service';
import { EspecialidadesService } from 'src/app/especialidades/services/especialidades.service';
import { MedicosValidator } from '../../validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-especialidades-page',
  templateUrl: './gestionar-especialidades-page.component.html',
  styleUrls: ['./gestionar-especialidades-page.component.scss']
})
export class GestionarEspecialidadesPageComponent implements OnInit {

  agregarEspecialidadForm: FormGroup = this._fb.group(MedicosValidator.AgregarEspecialidad);

  AppRoutes = AppRoutes;
  FormatUtils = FormatUtils;
  APIUtils = APIUtils;
  FCNames = EFormControlNames;

  medico: IMedicos;
  listadoEspecialidadesMedico: IMedicosEspecialidades[] = [];

  listadoEspecialidades: IEspecialidades[] = [];
  listadoConsultorios: IConsultorios[] = [];

  loading: boolean = true;

  public especialidadSeleccionada: string;
  public consultorioSeleccionado: string

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

    const data: IAgregarEspecialidad = {
      ...ReactiveFormsUtils.getControlsAndTheirValues(this.agregarEspecialidadForm)
    }

    this._medicosService.agregarEspecialidad(this.medico._id, this.especialidadSeleccionada, this.consultorioSeleccionado, data).subscribe(response => {
      Swal.fire("Correcto", response.msg, "success");
      this._limpiar();
      this._medicosService.listadoEspecialidades(this.medico._id).subscribe(response => this.listadoEspecialidadesMedico = response.data);
    });
  }

  busquedaEspecialidad(busqueda: string): void {
    this._especialidadesService.catalogo(busqueda, true).subscribe(response => this.listadoEspecialidades = response.data);
  }

  busquedaConsultorio(busqueda: string): void {
    this._consultoriosService.catalogo(busqueda, true).subscribe(response => this.listadoConsultorios = response.data);
  }

  seleccionarEspecialidad(especialidad: IEspecialidades): void {
    this.especialidadSeleccionada = especialidad._id;
  }

  seleccionarConsultorio(consultorio: IConsultorios): void {
    this.consultorioSeleccionado = consultorio._id;
  }

  isValidForm(): boolean {
    return (Boolean(this.especialidadSeleccionada) && Boolean(this.consultorioSeleccionado) && this.agregarEspecialidadForm.valid);
  }

  modificarEstadoEspecialidad(medicoEspecialidad: IMedicosEspecialidades): void {
    this._medicosService.modificarEstadoEspecialidad(medicoEspecialidad._id).subscribe(response => {
      Swal.fire("Correcto", response.msg, "success");
      this._medicosService.listadoEspecialidades(this.medico._id).subscribe(response => this.listadoEspecialidadesMedico = response.data);
    });
  }

  private _limpiar(): void {
    this.especialidadSeleccionada = "";
    this.consultorioSeleccionado = "";
    this.agregarEspecialidadForm.controls[this.FCNames.CEDULA].setValue("");
  }

  regresar() {
    this._location.back();
  }
}
