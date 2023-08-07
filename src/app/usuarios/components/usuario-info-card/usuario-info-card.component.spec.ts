import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioInfoCardComponent } from './usuario-info-card.component';

describe('UsuarioInfoCardComponent', () => {
  let component: UsuarioInfoCardComponent;
  let fixture: ComponentFixture<UsuarioInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioInfoCardComponent]
    });
    fixture = TestBed.createComponent(UsuarioInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
