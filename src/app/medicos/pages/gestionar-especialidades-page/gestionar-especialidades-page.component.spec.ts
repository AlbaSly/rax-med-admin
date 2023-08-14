import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEspecialidadesPageComponent } from './gestionar-especialidades-page.component';

describe('GestionarEspecialidadesPageComponent', () => {
  let component: GestionarEspecialidadesPageComponent;
  let fixture: ComponentFixture<GestionarEspecialidadesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarEspecialidadesPageComponent]
    });
    fixture = TestBed.createComponent(GestionarEspecialidadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
