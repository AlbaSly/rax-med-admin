import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-step-buttons',
  templateUrl: './form-step-buttons.component.html',
  styleUrls: ['./form-step-buttons.component.scss']
})
export class FormStepButtonsComponent {
  @Output() prevClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextClick: EventEmitter<void> = new EventEmitter<void>();

  @Input() isFirstFormStep: boolean;
  @Input() isLastFormStep: boolean;

  constructor() {}

  onPrevClick(): void {
    this.prevClick.emit();
  }

  onNextClick(): void {
    this.nextClick.emit();
  }
}
