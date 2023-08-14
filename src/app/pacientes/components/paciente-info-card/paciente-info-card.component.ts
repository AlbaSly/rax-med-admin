import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { IPacientes } from 'src/app/shared/interfaces';
import { APIUtils, FormatUtils, RoutesUtils } from 'src/app/shared/utils';

@Component({
  selector: 'app-paciente-info-card',
  templateUrl: './paciente-info-card.component.html',
  styleUrls: ['./paciente-info-card.component.scss']
})
export class PacienteInfoCardComponent {
  @Input() paciente: IPacientes;

  APIUtils = APIUtils;
  FormatUtils = FormatUtils;
  AppRoutes = AppRoutes;

  constructor(
    private readonly _router: Router,
  ) {}

  verInfo(): void {
    const url: string = RoutesUtils.replaceRouteIdParam(this.AppRoutes.MedicosRoutePaths.ver, this.paciente._id);

    this._router.navigateByUrl(url);
  }
}
