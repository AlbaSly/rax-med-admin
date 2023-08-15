import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent implements AfterViewInit{
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("inputBusqueda") inputBusqueda: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    fromEvent(this.inputBusqueda.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(250),
        distinctUntilChanged(),
        tap((source: any) => {
          const busqueda = source.target.value.trim();
          this.search.emit(busqueda);
        })
      ).subscribe()
  }

  limpiarBusqueda($event: Event): void {
    $event.preventDefault();
    
    this.inputBusqueda.nativeElement.value = "";
    this.search.emit("");
  }
}
