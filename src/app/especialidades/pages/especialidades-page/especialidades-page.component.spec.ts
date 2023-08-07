import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesPageComponent } from './especialidades-page.component';

describe('EspecialidadesPageComponent', () => {
  let component: EspecialidadesPageComponent;
  let fixture: ComponentFixture<EspecialidadesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesPageComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
