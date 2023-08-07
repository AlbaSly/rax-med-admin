import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../../constants/routes';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent {

  AppRoutes = AppRoutes;

  hideMenu: boolean = false;
  currentAnimationClass: string = "animate__fadeInLeft";

  constructor(
    private _router: Router,
  ) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const screenSize = window.innerWidth;
    if (screenSize >= 1024) {
      if (!this.hideMenu) return;
      this.hideMenu = false;
    }
  }

  handleResponsiveMenu(): void {
    if (this.hideMenu) {
      this.hideMenu = false;
      return;
    }

    this.hideMenu = true;
  }

  navigateToMain(): void {
    this._router.navigateByUrl(AppRoutes.HomeRoutePaths.index);
  }
}
