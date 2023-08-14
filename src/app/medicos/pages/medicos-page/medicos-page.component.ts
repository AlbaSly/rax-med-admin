import { Component, OnInit } from '@angular/core';
import { IMedicos } from 'src/app/shared/interfaces';
import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-medicos-page',
  templateUrl: './medicos-page.component.html',
  styleUrls: ['./medicos-page.component.scss']
})
export class MedicosPageComponent implements OnInit {

  medicos: IMedicos[] = [];

  constructor(
    private readonly _medicosService: MedicosService
  ) {}

  ngOnInit(): void {
    this._medicosService.catalogo().subscribe(response => this.medicos = response.data);
  }
}
