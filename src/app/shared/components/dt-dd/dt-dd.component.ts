import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dt-dd',
  templateUrl: './dt-dd.component.html',
  styleUrls: ['./dt-dd.component.scss']
})
export class DtDdComponent {
  @Input() title: string;
  @Input() description: string | number | Date | null | unknown;

}
