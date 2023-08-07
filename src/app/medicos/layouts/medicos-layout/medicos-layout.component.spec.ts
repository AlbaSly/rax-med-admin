import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosLayoutComponent } from './medicos-layout.component';

describe('MedicosLayoutComponent', () => {
  let component: MedicosLayoutComponent;
  let fixture: ComponentFixture<MedicosLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicosLayoutComponent]
    });
    fixture = TestBed.createComponent(MedicosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
