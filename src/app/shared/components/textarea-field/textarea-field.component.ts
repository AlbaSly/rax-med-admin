import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaFieldComponent),
      multi: true,
    }
  ]
})
export class TextareaFieldComponent implements OnInit, ControlValueAccessor {
  
  /**Label data */

  @Input() for: string;
  @Input() label: string;

  /**Input Data */
  @Input() name: string;
  @Input() placeholder: string;
  
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  
  writeValue(value: string): void {
    this.value = value;
  }
  
  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(): void {}

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue($event: Event): void {
    if (!$event.target) return;

    const value = ($event.target as HTMLInputElement).value;

    this.value = value;
    this.valueChange.emit(value);
    this.onChange(value);
  }

  onTouched(): void {
    this.onTouchedFn();
  }

  private onChange: any = () => {};
  private onTouchedFn: any = () => {};
}
