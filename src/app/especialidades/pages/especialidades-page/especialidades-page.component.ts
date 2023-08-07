import { Component, OnInit } from '@angular/core';
import { IEspecialidades } from 'src/app/shared/interfaces';
import { EspecialidadesService } from '../../services/especialidades.service';

@Component({
  selector: 'app-especialidades-page',
  templateUrl: './especialidades-page.component.html',
  styleUrls: ['./especialidades-page.component.scss']
})
export class EspecialidadesPageComponent implements OnInit {

  especialidades: IEspecialidades[] = [];

  constructor(
    private readonly _especialidadesService: EspecialidadesService,
  ) {}

  ngOnInit(): void {
    this._especialidadesService.catalogo().subscribe(response => this.especialidades = response.data);
  }
}
