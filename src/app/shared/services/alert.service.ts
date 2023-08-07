import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private _showingAlert: boolean = false;
  private _message: string = "";

  private alertCssClasses: string = "";

  constructor() { }

  showAlert(type: AlertType = "success"): void {
    if (this.isShowingAlert) return;

    this._showingAlert = true;

    setTimeout(() => {
      this.closeAlert();
    }, 3000);
  }

  closeAlert(): void {
    this._showingAlert = false;
  }

  get isShowingAlert(): boolean {
    return this._showingAlert;
  }

  get message(): string {
    return this._message;
  }
}

type AlertType = "success" | "error" | "warning" | "notification";