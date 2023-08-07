import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadInfoPageComponent } from './especialidad-info-page.component';

describe('EspecialidadInfoPageComponent', () => {
  let component: EspecialidadInfoPageComponent;
  let fixture: ComponentFixture<EspecialidadInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadInfoPageComponent]
    });
    fixture = TestBed.createComponent(EspecialidadInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
