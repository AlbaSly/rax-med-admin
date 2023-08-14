import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';
import { IConsultorios } from 'src/app/shared/interfaces';
import { ConsultoriosService } from '../../services/consultorios.service';

@Component({
  selector: 'app-listado-consultorios',
  templateUrl: './listado-consultorios.component.html',
  styleUrls: ['./listado-consultorios.component.scss']
})
export class ListadoConsultoriosComponent {
  @Input() listadoConsultorios: IConsultorios[] = [];

  @ViewChild('inputBusqueda') inputBusqueda: ElementRef;

  constructor(
    private readonly _consultoriosService: ConsultoriosService,
  ) {}

  busqueda($event: string): void {
    this._consultoriosService.catalogo($event).subscribe((response) => this.listadoConsultorios = response.data);
  }
}
