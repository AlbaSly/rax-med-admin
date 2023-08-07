import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionTipoCuentaFormFieldsetComponent } from './seleccion-tipo-cuenta-form-fieldset.component';

describe('SeleccionTipoCuentaFormFieldsetComponent', () => {
  let component: SeleccionTipoCuentaFormFieldsetComponent;
  let fixture: ComponentFixture<SeleccionTipoCuentaFormFieldsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionTipoCuentaFormFieldsetComponent]
    });
    fixture = TestBed.createComponent(SeleccionTipoCuentaFormFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
