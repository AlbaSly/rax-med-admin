import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarConsultorioPageComponent } from './registrar-consultorio-page.component';

describe('RegistrarConsultorioPageComponent', () => {
  let component: RegistrarConsultorioPageComponent;
  let fixture: ComponentFixture<RegistrarConsultorioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarConsultorioPageComponent]
    });
    fixture = TestBed.createComponent(RegistrarConsultorioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
