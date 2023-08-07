import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoConsultoriosComponent } from './listado-consultorios.component';

describe('ListadoConsultoriosComponent', () => {
  let component: ListadoConsultoriosComponent;
  let fixture: ComponentFixture<ListadoConsultoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoConsultoriosComponent]
    });
    fixture = TestBed.createComponent(ListadoConsultoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
