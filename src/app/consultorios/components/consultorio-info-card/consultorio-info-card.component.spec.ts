import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioInfoCardComponent } from './consultorio-info-card.component';

describe('ConsultorioInfoCardComponent', () => {
  let component: ConsultorioInfoCardComponent;
  let fixture: ComponentFixture<ConsultorioInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultorioInfoCardComponent]
    });
    fixture = TestBed.createComponent(ConsultorioInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
