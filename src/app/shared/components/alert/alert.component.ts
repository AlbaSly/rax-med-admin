import { Component } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  
  msg: string = this._alertService.message;

  constructor(
    private readonly _alertService: AlertService,
  ) {}
}
