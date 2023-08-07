import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { IConsultorios } from 'src/app/shared/interfaces';
import { RoutesUtils } from 'src/app/shared/utils';

@Component({
  selector: 'app-consultorio-info-card',
  templateUrl: './consultorio-info-card.component.html',
  styleUrls: ['./consultorio-info-card.component.scss']
})
export class ConsultorioInfoCardComponent {
  @Input() consultorio: IConsultorios;

  AppRoutes = AppRoutes;

  constructor(
    private readonly _router: Router,
  ) {}

  verInfo(): void {
    const url: string = RoutesUtils.replaceRouteIdParam(this.AppRoutes.ConsultoriosRoutePaths.ver, this.consultorio._id);

    this._router.navigateByUrl(url);
  }
}
