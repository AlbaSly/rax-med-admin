import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesFormFieldsetComponent } from './datos-personales-form-fieldset.component';

describe('DatosPersonalesFormFieldsetComponent', () => {
  let component: DatosPersonalesFormFieldsetComponent;
  let fixture: ComponentFixture<DatosPersonalesFormFieldsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosPersonalesFormFieldsetComponent]
    });
    fixture = TestBed.createComponent(DatosPersonalesFormFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
