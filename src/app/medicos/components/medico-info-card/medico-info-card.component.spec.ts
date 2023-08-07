import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoInfoCardComponent } from './medico-info-card.component';

describe('MedicoInfoCardComponent', () => {
  let component: MedicoInfoCardComponent;
  let fixture: ComponentFixture<MedicoInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoInfoCardComponent]
    });
    fixture = TestBed.createComponent(MedicoInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
