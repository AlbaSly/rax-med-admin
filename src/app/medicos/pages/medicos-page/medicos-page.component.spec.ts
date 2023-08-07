import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosPageComponent } from './medicos-page.component';

describe('MedicosPageComponent', () => {
  let component: MedicosPageComponent;
  let fixture: ComponentFixture<MedicosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicosPageComponent]
    });
    fixture = TestBed.createComponent(MedicosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
