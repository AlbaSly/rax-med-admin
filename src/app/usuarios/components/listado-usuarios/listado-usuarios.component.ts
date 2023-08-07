import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';
import { IUsuarios} from 'src/app/shared/interfaces';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements AfterViewInit {
  @Input() listadoUsuarios: IUsuarios[] = [];

  @ViewChild('inputBusqueda') inputBusqueda: ElementRef;

  constructor(
  ) {}

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
