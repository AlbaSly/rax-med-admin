import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputFieldComponent } from './select-input-field.component';

describe('SelectInputFieldComponent', () => {
  let component: SelectInputFieldComponent;
  let fixture: ComponentFixture<SelectInputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectInputFieldComponent]
    });
    fixture = TestBed.createComponent(SelectInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
