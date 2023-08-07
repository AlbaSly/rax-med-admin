import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesLayoutComponent } from './especialidades-layout.component';

describe('EspecialidadesLayoutComponent', () => {
  let component: EspecialidadesLayoutComponent;
  let fixture: ComponentFixture<EspecialidadesLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesLayoutComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
