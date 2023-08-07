import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'input[toUppercase]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputUppercaseDirective),
    }
  ]
})
export class InputUppercaseDirective extends DefaultValueAccessor{

  @HostListener('input', ['$event']) 
  input($event: InputEvent) {
    const target = $event.target as HTMLInputElement;

    if (target.type === "email" || target.type === "password" || target.type === "number") return this.onChange(target.value);

    const start = target.selectionStart;

    target.value = target.value.toUpperCase();
    target.setSelectionRange(start, start);

    this.onChange(target.value);
  }

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    super(renderer, elementRef, false);
  }

}
