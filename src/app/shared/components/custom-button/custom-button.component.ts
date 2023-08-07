import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input() type: TButtonType = "button";
  @Input() color: TButtonColorType = "style1";
  @Input() size:  TButtonSizeType = "auto";
  @Input() title: string = "Hello, World!";

  @Input() disabled: boolean = false;
  @Output('click') click: EventEmitter<void> = new EventEmitter<void>();

  @Input() extraClasses: string = "";

  public colorClasses: string = "";
  public widthClasses: string = "";

  constructor() {
    setTimeout(() => {
      this._setColor();
      this._setSize();
    }, 100);
  }

  ngOnInit(): void {}

  onClick(): void {
    if (this.disabled) return;    
    this.click.emit();
  }

  private _setColor(): void {
    Object.keys(BUTTON_COLORS).forEach((_color) => {
      if (_color == this.color) {
        this.colorClasses = BUTTON_COLORS[_color];
      }
    });
  }

  private _setSize(): void {
    Object.keys(BUTTON_SIZES).forEach((_size) => {
      if (_size == this.size) {
        this.widthClasses = BUTTON_SIZES[_size];
      }
    });
  }
}

/**Tipos de botón */
type TButtonType = "button" | "submit";
/**Colores identificadores del botón */
type TButtonColorType = "pagination" | "style1" | "style2" | "new" | "edit" | "view" | "delete"; 
/**Anchura del botón */
type TButtonSizeType = "full" | "auto";

/**Tailwind color classes */
const BUTTON_COLORS = {
  pagination: 'bg-red-400 hover:bg-red-500',
  style1: 'bg-primary hover:bg-primaryDarker',
  style2: 'bg-red-400 hover:bg-red-500',
  new: 'bg-green-500 hover:bg-green-600',
  edit: 'bg-secondaryDarker hover:bg-secondaryDarker2',
  view: 'bg-secondary hover:bg-secondaryDarker',
  delete: 'bg-red-500 hover:bg-red-600',
}

const BUTTON_SIZES = {
  full: 'px-8 block w-full md:3/4 lg:w-1/2',
  auto: 'p-4',
}