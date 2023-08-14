import { Component, Input } from '@angular/core';
import { IPacientes } from 'src/app/shared/interfaces';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.scss']
})
export class ListadoPacientesComponent {
  @Input() listadoPacientes: IPacientes[] = [];

  constructor(
    private readonly _pacientesService: PacientesService,
  ) {}

  busqueda($event: string): void {
    this._pacientesService.catalogo($event).subscribe(response => this.listadoPacientes = response.data);
  }
}
