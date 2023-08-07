import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialesUsuarioSistemaFormFieldsetComponent } from './credenciales-usuario-sistema-form-fieldset.component';

describe('CredencialesUsuarioSistemaFormFieldsetComponent', () => {
  let component: CredencialesUsuarioSistemaFormFieldsetComponent;
  let fixture: ComponentFixture<CredencialesUsuarioSistemaFormFieldsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CredencialesUsuarioSistemaFormFieldsetComponent]
    });
    fixture = TestBed.createComponent(CredencialesUsuarioSistemaFormFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
