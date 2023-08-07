import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMedicosComponent } from './listado-medicos.component';

describe('ListadoMedicosComponent', () => {
  let component: ListadoMedicosComponent;
  let fixture: ComponentFixture<ListadoMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoMedicosComponent]
    });
    fixture = TestBed.createComponent(ListadoMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
