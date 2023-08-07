import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadInfoCardComponent } from './especialidad-info-card.component';

describe('EspecialidadInfoCardComponent', () => {
  let component: EspecialidadInfoCardComponent;
  let fixture: ComponentFixture<EspecialidadInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadInfoCardComponent]
    });
    fixture = TestBed.createComponent(EspecialidadInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
