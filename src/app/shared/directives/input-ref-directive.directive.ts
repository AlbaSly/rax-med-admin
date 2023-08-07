import { Directive } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive({
  selector: '[inputRef]'
})
export class InputRefDirectiveDirective {

  constructor(private _ngControl: NgControl) {
    trimValueAccesor(this._ngControl.valueAccessor!);
  }
}

function trimValueAccesor(valueAccesor: ControlValueAccessor) {
  const original = valueAccesor.registerOnChange;

  valueAccesor.registerOnChange = (fn: (_: unknown) => void) => {
    return original.call(valueAccesor, (value: unknown) => {
      return fn(typeof value === 'string' ? value.trim() : value);
    });
  }
}