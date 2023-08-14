import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedicoPageComponent } from './editar-medico-page.component';

describe('EditarMedicoPageComponent', () => {
  let component: EditarMedicoPageComponent;
  let fixture: ComponentFixture<EditarMedicoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMedicoPageComponent]
    });
    fixture = TestBed.createComponent(EditarMedicoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
