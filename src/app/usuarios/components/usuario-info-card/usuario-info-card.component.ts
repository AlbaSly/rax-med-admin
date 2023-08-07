import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { IUsuarios } from 'src/app/shared/interfaces';
import { APIUtils, FormatUtils, RoutesUtils } from 'src/app/shared/utils';

@Component({
  selector: 'app-usuario-info-card',
  templateUrl: './usuario-info-card.component.html',
  styleUrls: ['./usuario-info-card.component.scss']
})
export class UsuarioInfoCardComponent {
  @Input() usuario: IUsuarios;

  FormatUtils = FormatUtils;
  
  APIUtils = APIUtils;

  Routes = AppRoutes;

  constructor(
    private readonly _router: Router,
  ) {}

  verInfo(): void {
    const url: string = RoutesUtils.replaceRouteIdParam(this.Routes.UsuariosRoutePaths.ver, this.usuario._id);
    
    this._router.navigateByUrl(url);
  }
}
