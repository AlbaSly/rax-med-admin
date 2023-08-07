import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteInfoCardComponent } from './paciente-info-card.component';

describe('PacienteInfoCardComponent', () => {
  let component: PacienteInfoCardComponent;
  let fixture: ComponentFixture<PacienteInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteInfoCardComponent]
    });
    fixture = TestBed.createComponent(PacienteInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
