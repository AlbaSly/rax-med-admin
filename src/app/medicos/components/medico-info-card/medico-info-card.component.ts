import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { IMedicos } from 'src/app/shared/interfaces';
import { APIUtils, FormatUtils, RoutesUtils } from 'src/app/shared/utils';

@Component({
  selector: 'app-medico-info-card',
  templateUrl: './medico-info-card.component.html',
  styleUrls: ['./medico-info-card.component.scss']
})
export class MedicoInfoCardComponent {
  @Input() medico: IMedicos;

  APIUTils = APIUtils;
  FormatUtils = FormatUtils;
  AppRoutes = AppRoutes;

  constructor(
    private readonly _router: Router,
  ) {}

  verInfo(): void {
    const url: string = RoutesUtils.replaceRouteIdParam(this.AppRoutes.MedicosRoutePaths.ver, this.medico._id);

    this._router.navigateByUrl(url);
  }
}
