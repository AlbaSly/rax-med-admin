import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accion-card',
  templateUrl: './accion-card.component.html',
  styleUrls: ['./accion-card.component.scss']
})
export class AccionCardComponent {
  @Input() accionTitulo: string;
  @Input() botonTitulo: string;

  @Input() classes: string = ""; 

  @Output('buttonClick') buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onClick(): void {
    this.buttonClick.emit();
  }
}
