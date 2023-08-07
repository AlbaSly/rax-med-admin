import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { IEspecialidades } from 'src/app/shared/interfaces';
import { FormatUtils, RoutesUtils } from 'src/app/shared/utils';

@Component({
  selector: 'app-especialidad-info-card',
  templateUrl: './especialidad-info-card.component.html',
  styleUrls: ['./especialidad-info-card.component.scss']
})
export class EspecialidadInfoCardComponent {
  @Input() especialidad: IEspecialidades;

  FormatUtils = FormatUtils;
  AppRoutes = AppRoutes;

  constructor(
    private readonly _router: Router,
  ) {}

  verInfo(): void {
    const url: string = RoutesUtils.replaceRouteIdParam(this.AppRoutes.EspecialidadesRoutePaths.ver, this.especialidad._id);

    this._router.navigateByUrl(url);
  }
}
