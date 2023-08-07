import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriosPageComponent } from './consultorios-page.component';

describe('ConsultoriosPageComponent', () => {
  let component: ConsultoriosPageComponent;
  let fixture: ComponentFixture<ConsultoriosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultoriosPageComponent]
    });
    fixture = TestBed.createComponent(ConsultoriosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
