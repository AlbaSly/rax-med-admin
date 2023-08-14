import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';
import { DOMUtils } from '../../utils';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent {

  private subscription: Subscription;

  constructor(
    public readonly loaderService: LoaderService,
  ) {
    this.loaderService.isLoading$.subscribe((value) => {
      const html = document.querySelector('html') as HTMLElement;
    const body = document.querySelector('body') as HTMLBodyElement;
      if (value) {
        DOMUtils.scrollToTop();
        
        html.style.overflowX = 'hidden';
        body.style.overflowX = 'hidden';
        html.style.overflowY = 'hidden';
        body.style.overflowY = 'hidden';
      } else {
        html.style.overflowY = 'auto';
        body.style.overflowY = 'auto';
      }
    })
  }
}
