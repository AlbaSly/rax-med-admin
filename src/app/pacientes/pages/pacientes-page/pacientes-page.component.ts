import { Component, OnInit } from '@angular/core';
import { IPacientes } from 'src/app/shared/interfaces';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-pacientes-page',
  templateUrl: './pacientes-page.component.html',
  styleUrls: ['./pacientes-page.component.scss']
})
export class PacientesPageComponent implements OnInit{
  pacientes: IPacientes[] = [];

  constructor(
    private readonly _pacientesService: PacientesService,
  ) {}

  ngOnInit(): void {
    this._pacientesService.catalogo().subscribe(response => this.pacientes = response.data);
  }
}
