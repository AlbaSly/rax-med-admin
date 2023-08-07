import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/routes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {

  @ViewChild('cardsContainer') private _cardsContainer: ElementRef;

  Routes: typeof AppRoutes = AppRoutes;

  constructor(
    private readonly _titleService: Title,
    private readonly _router: Router,
  ) {
    this._titleService.setTitle('Inicio');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._removeOverflowHiddenClass();
    }, 500);
  }

  navigateTo(url: string): void {
    this._router.navigateByUrl(url);
  }

  private _removeOverflowHiddenClass(): void {
    const element = this._cardsContainer.nativeElement as HTMLDivElement;
    element.classList.remove('overflow-hidden');    
  }
}
