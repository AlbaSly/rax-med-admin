import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioInfoPageComponent } from './consultorio-info-page.component';

describe('ConsultorioInfoPageComponent', () => {
  let component: ConsultorioInfoPageComponent;
  let fixture: ComponentFixture<ConsultorioInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultorioInfoPageComponent]
    });
    fixture = TestBed.createComponent(ConsultorioInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
