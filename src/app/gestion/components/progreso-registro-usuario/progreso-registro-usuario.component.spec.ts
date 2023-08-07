import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoRegistroUsuarioComponent } from './progreso-registro-usuario.component';

describe('ProgresoRegistroUsuarioComponent', () => {
  let component: ProgresoRegistroUsuarioComponent;
  let fixture: ComponentFixture<ProgresoRegistroUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgresoRegistroUsuarioComponent]
    });
    fixture = TestBed.createComponent(ProgresoRegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
