import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit{
  constructor(
    public readonly loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    const html = document.querySelector('html') as HTMLElement;
    const body = document.querySelector('body') as HTMLBodyElement;

    html.style.overflowX = 'hidden';
    body.style.overflowX = 'hidden';
  }
}
