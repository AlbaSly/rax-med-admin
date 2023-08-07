import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUsuarioPageComponent } from './registrar-usuario-page.component';

describe('RegistrarUsuarioPageComponent', () => {
  let component: RegistrarUsuarioPageComponent;
  let fixture: ComponentFixture<RegistrarUsuarioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarUsuarioPageComponent]
    });
    fixture = TestBed.createComponent(RegistrarUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
