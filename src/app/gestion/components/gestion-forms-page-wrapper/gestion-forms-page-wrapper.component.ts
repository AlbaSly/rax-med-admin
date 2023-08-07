import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gestion-forms-page-wrapper',
  templateUrl: './gestion-forms-page-wrapper.component.html',
  styleUrls: ['./gestion-forms-page-wrapper.component.scss']
})
export class GestionFormsPageWrapperComponent {
  @Input() title: string; 
}
