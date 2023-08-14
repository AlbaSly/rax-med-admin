import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicosService } from '../../services/medicos.service';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { APIUtils, FormatUtils, RoutesUtils } from 'src/app/shared/utils';
import { IMedicos, IMedicosEspecialidades } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-medico-info-page',
  templateUrl: './medico-info-page.component.html',
  styleUrls: ['./medico-info-page.component.scss']
})
export class MedicoInfoPageComponent implements OnInit {

  AppRoutes = AppRoutes;
  FormatUtils = FormatUtils;
  APIUtils = APIUtils;

  medico: IMedicos;
  listadoEspecialidades: IMedicosEspecialidades[] = [];

  loading: boolean = true;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,

    private readonly _medicosService: MedicosService,
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];

    this._medicosService.info(id).subscribe(
      (response) => {
        this.medico = response.data;

        this._medicosService.listadoEspecialidades(this.medico._id).subscribe(response => this.listadoEspecialidades = response.data);
      },
      (error) => {
        this._router.navigateByUrl(AppRoutes.MedicosRoutePaths.index);
      },
      () => {
        this.loading = false;
      }
    );
  }

  editar(): void {
    const url = RoutesUtils.replaceRouteIdParam(AppRoutes.MedicosRoutePaths.editar, this.medico._id);
    this._router.navigateByUrl(url);
  }

  gestionarEspecialidades(): void {
    const url = RoutesUtils.replaceRouteIdParam(AppRoutes.MedicosRoutePaths.gestionarEspecialidades, this.medico._id);
    this._router.navigateByUrl(url);
  }
}
