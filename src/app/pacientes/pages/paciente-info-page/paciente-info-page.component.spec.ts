import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteInfoPageComponent } from './paciente-info-page.component';

describe('PacienteInfoPageComponent', () => {
  let component: PacienteInfoPageComponent;
  let fixture: ComponentFixture<PacienteInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteInfoPageComponent]
    });
    fixture = TestBed.createComponent(PacienteInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
