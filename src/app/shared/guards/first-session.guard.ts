import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { AppRoutes } from '../constants/routes';
import { AuthService } from 'src/app/auth/services/auth.service';
import { catchError, finalize, map, of, throwError } from 'rxjs';

/**Router guard para verificar existencia de token al abrir la aplicación */
export const firstSessionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const tokenService = inject(TokenService);
  const authService = inject(AuthService);

  const token = tokenService.getToken();

  if (!token) return true;

  const observableResult = authService.obtenerUsuarioData(token).pipe(
    map((response) => {
      router.navigateByUrl(AppRoutes.HomeRoutePaths.index);
      return false;
    }),
    catchError(e => {
      return of(true);
    }),
    finalize(() => {
      
    })
  );

  return observableResult;
}
