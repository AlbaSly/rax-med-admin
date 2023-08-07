import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarCuentaPageComponent } from './recuperar-cuenta-page.component';

describe('RecuperarCuentaPageComponent', () => {
  let component: RecuperarCuentaPageComponent;
  let fixture: ComponentFixture<RecuperarCuentaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarCuentaPageComponent]
    });
    fixture = TestBed.createComponent(RecuperarCuentaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
