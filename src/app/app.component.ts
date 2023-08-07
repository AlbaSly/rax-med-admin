import { Component } from '@angular/core';
import { AlertService } from './shared/services/alert.service';
import { UIService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdminCitasRegistro';

  constructor(
    public readonly alertService: AlertService,
    public readonly uiService: UIService,
  ) {}
}
