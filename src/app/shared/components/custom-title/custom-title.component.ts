import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-title',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.scss']
})
export class CustomTitleComponent {
  @Input() type: string = "h1" || "h2" || "h3" || "h4" || "h5";
  @Input() title: string = "Hello, World!";
  @Input() classes: string = "";
  @Input() darkMode: boolean = false;

  constructor() {}
}
