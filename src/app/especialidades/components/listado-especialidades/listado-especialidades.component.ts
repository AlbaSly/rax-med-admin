import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';
import { IEspecialidades } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-listado-especialidades',
  templateUrl: './listado-especialidades.component.html',
  styleUrls: ['./listado-especialidades.component.scss']
})
export class ListadoEspecialidadesComponent implements AfterViewInit {
  @Input() listadoEspecialidades: IEspecialidades[] = [];

  @ViewChild('inputBusqueda') inputBusqueda: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    fromEvent(this.inputBusqueda.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(250),
        distinctUntilChanged(),
        tap((text) => {
          console.log(this.inputBusqueda.nativeElement.value.trim());
        }),
      ).subscribe();
  }

  limpiarBusqueda(): void {
    this.inputBusqueda.nativeElement.value = "";
  }
}
