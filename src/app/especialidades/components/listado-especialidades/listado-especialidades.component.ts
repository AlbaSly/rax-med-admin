import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';
import { IEspecialidades } from 'src/app/shared/interfaces';
import { EspecialidadesService } from '../../services/especialidades.service';

@Component({
  selector: 'app-listado-especialidades',
  templateUrl: './listado-especialidades.component.html',
  styleUrls: ['./listado-especialidades.component.scss']
})
export class ListadoEspecialidadesComponent {
  @Input() listadoEspecialidades: IEspecialidades[] = [];

  constructor(
    private readonly _especialidadesService: EspecialidadesService,
  ) {}

  busqueda($event: string): void {
    this._especialidadesService.catalogo($event).subscribe((response) => this.listadoEspecialidades = response.data);
  }
}
