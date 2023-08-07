import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RolesService } from 'src/app/roles/services/roles.service';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import { IRoles } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-seleccion-tipo-cuenta-form-fieldset',
  templateUrl: './seleccion-tipo-cuenta-form-fieldset.component.html',
  styleUrls: ['./seleccion-tipo-cuenta-form-fieldset.component.scss']
})
export class SeleccionTipoCuentaFormFieldsetComponent implements OnInit {
  @Input() tipoCuentaForm: FormGroup;
  @Input() classes: string;

  FCNames = EFormControlNames;

  roles: {value: string | null, title: string}[] = [];

  constructor(
    private readonly _rolesService: RolesService,
  ) {}

  ngOnInit(): void {
    this._rolesService.catalogo().subscribe((response) => {
      this.roles = response.data.map(rol => ({
        value: rol.nombre,
        title: rol.nombre
      }));
      this.roles.unshift({
        value: null,
        title: "Elija un rol"
      });
    });
  }
}
