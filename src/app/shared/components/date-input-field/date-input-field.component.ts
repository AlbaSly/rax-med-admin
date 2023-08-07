import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-input-field',
  templateUrl: './date-input-field.component.html',
  styleUrls: ['./date-input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputFieldComponent),
      multi: true,
    }
  ],
})
export class DateInputFieldComponent implements OnInit, ControlValueAccessor{
  /**Label data */
  @Input() for: string;
  @Input() label: string;

  /**Input Data */
  @Input() id: string;
  @Input() name: string;
  
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
