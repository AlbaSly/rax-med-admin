import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputFieldComponent } from './date-input-field.component';

describe('DateInputFieldComponent', () => {
  let component: DateInputFieldComponent;
  let fixture: ComponentFixture<DateInputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateInputFieldComponent]
    });
    fixture = TestBed.createComponent(DateInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
