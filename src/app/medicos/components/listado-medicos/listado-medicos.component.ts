import { Component, Input } from '@angular/core';
import { IMedicos } from 'src/app/shared/interfaces';
import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-listado-medicos',
  templateUrl: './listado-medicos.component.html',
  styleUrls: ['./listado-medicos.component.scss']
})
export class ListadoMedicosComponent {
  @Input() listadoMedicos: IMedicos[] = [];

  constructor(
    private readonly _medicosService: MedicosService,
  ) {}
  
  busqueda($event: string): void {
    this._medicosService.catalogo($event).subscribe(response => this.listadoMedicos = response.data);
  }
}
