import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFormsPageWrapperComponent } from './gestion-forms-page-wrapper.component';

describe('GestionFormsPageWrapperComponent', () => {
  let component: GestionFormsPageWrapperComponent;
  let fixture: ComponentFixture<GestionFormsPageWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionFormsPageWrapperComponent]
    });
    fixture = TestBed.createComponent(GestionFormsPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
