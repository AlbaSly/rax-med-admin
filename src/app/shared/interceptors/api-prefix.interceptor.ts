import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { PerfilService } from '../services/perfil.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  private token: string | null = null;

  constructor(
    private readonly _tokenService: TokenService,
    private readonly _perfilService: PerfilService,
  ) {
    this.token = this._tokenService.getToken();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const apiUrl = environment.apiUrl;
    const modifiedRequest = request.clone({ 
      url: apiUrl + request.url, //request.url es la ruta o endpoint a consultar
      setHeaders: {
        'Authorization': `Bearer ${this.token}`
      }
    });

    // Continúa con la solicitud modificada
    return next.handle(modifiedRequest);
  }
}
