import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';
import { AppRoutes } from '../constants/routes';
import { PerfilService } from '../services/perfil.service';
import { IRejectResponse } from '../interfaces';
import { catchError, map, throwError } from 'rxjs';

/**Router guard para protección de rutas */
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const perfilService = inject(PerfilService);

  const token = tokenService.getToken();

  if (!token) return router.navigateByUrl(AppRoutes.AuthRoutePaths.login);

  const observableResult = authService.obtenerUsuarioData(token).pipe(
    map((response) => {
      perfilService.isLoggedIn = true;
      perfilService.setMyProfile = response.data;
      return true;
    }),
    catchError(e => {
      router.navigateByUrl(AppRoutes.AuthRoutePaths.login);
      return throwError(e);
    })
  );

  return observableResult;
};
