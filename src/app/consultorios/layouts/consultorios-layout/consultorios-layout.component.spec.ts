import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriosLayoutComponent } from './consultorios-layout.component';

describe('ConsultoriosLayoutComponent', () => {
  let component: ConsultoriosLayoutComponent;
  let fixture: ComponentFixture<ConsultoriosLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultoriosLayoutComponent]
    });
    fixture = TestBed.createComponent(ConsultoriosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
