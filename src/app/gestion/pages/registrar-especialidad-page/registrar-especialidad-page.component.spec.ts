import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEspecialidadPageComponent } from './registrar-especialidad-page.component';

describe('RegistrarEspecialidadPageComponent', () => {
  let component: RegistrarEspecialidadPageComponent;
  let fixture: ComponentFixture<RegistrarEspecialidadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEspecialidadPageComponent]
    });
    fixture = TestBed.createComponent(RegistrarEspecialidadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
