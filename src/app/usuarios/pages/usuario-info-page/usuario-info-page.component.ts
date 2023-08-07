import { Component, OnInit } from '@angular/core';
import { IUsuarios, InfoUsuario } from 'src/app/shared/interfaces';
import { APIUtils, FormatUtils } from 'src/app/shared/utils';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/routes';

@Component({
  selector: 'app-usuario-info-page',
  templateUrl: './usuario-info-page.component.html',
  styleUrls: ['./usuario-info-page.component.scss']
})
export class UsuarioInfoPageComponent implements OnInit {

  AppRoutes = AppRoutes;

  FormatUtils = FormatUtils;
  APIUtils = APIUtils;

  info: InfoUsuario;

  loading: boolean = true;

  constructor(
    private readonly _router: Router,
    private route: ActivatedRoute,

    private readonly _usuariosService: UsuariosService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.loading = true;
    this._usuariosService.info(id).subscribe(
      (response) => {
        this.info = response.data;
      },
      (error) => {
        this._router.navigateByUrl(AppRoutes.UsuariosRoutePaths.index);
      },
      () => {
        this.loading = false;
      }
    );
  }
}
