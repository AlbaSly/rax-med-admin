import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoInfoPageComponent } from './medico-info-page.component';

describe('MedicoInfoPageComponent', () => {
  let component: MedicoInfoPageComponent;
  let fixture: ComponentFixture<MedicoInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoInfoPageComponent]
    });
    fixture = TestBed.createComponent(MedicoInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
