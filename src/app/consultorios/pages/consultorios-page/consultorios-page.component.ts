import { Component, OnInit } from '@angular/core';
import { IConsultorios } from 'src/app/shared/interfaces';
import { ConsultoriosService } from '../../services/consultorios.service';

@Component({
  selector: 'app-consultorios-page',
  templateUrl: './consultorios-page.component.html',
  styleUrls: ['./consultorios-page.component.scss']
})
export class ConsultoriosPageComponent implements OnInit {

  consultorios: IConsultorios[] = [];

  constructor(
    private readonly _consultoriosService: ConsultoriosService,
  ) {}

  ngOnInit(): void {
    this._consultoriosService.catalogo().subscribe(response => this.consultorios = response.data);
  }
}
