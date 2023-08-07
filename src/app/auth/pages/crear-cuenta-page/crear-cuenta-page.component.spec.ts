import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaPageComponent } from './crear-cuenta-page.component';

describe('CrearCuentaPageComponent', () => {
  let component: CrearCuentaPageComponent;
  let fixture: ComponentFixture<CrearCuentaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCuentaPageComponent]
    });
    fixture = TestBed.createComponent(CrearCuentaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
