import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';
import { IConsultorios } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-listado-consultorios',
  templateUrl: './listado-consultorios.component.html',
  styleUrls: ['./listado-consultorios.component.scss']
})
export class ListadoConsultoriosComponent implements AfterViewInit {
  @Input() listadoConsultorios: IConsultorios[] = [];

  @ViewChild('inputBusqueda') inputBusqueda: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    fromEvent(this.inputBusqueda.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(250),
        distinctUntilChanged(),
        tap((text) => {
          console.log(this.inputBusqueda.nativeElement.value);
        }),
      ).subscribe();
  }

  limpiarBusqueda(): void {
    this.inputBusqueda.nativeElement.value = "";
  }
}
