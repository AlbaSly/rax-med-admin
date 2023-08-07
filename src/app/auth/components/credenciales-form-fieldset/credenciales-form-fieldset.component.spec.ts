import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialesFormFieldsetComponent } from './credenciales-form-fieldset.component';

describe('CredencialesFormFieldsetComponent', () => {
  let component: CredencialesFormFieldsetComponent;
  let fixture: ComponentFixture<CredencialesFormFieldsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CredencialesFormFieldsetComponent]
    });
    fixture = TestBed.createComponent(CredencialesFormFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
