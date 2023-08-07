import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepButtonsComponent } from './form-step-buttons.component';

describe('FormStepButtonsComponent', () => {
  let component: FormStepButtonsComponent;
  let fixture: ComponentFixture<FormStepButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormStepButtonsComponent]
    });
    fixture = TestBed.createComponent(FormStepButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
