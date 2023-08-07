import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionCardComponent } from './accion-card.component';

describe('AccionCardComponent', () => {
  let component: AccionCardComponent;
  let fixture: ComponentFixture<AccionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccionCardComponent]
    });
    fixture = TestBed.createComponent(AccionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
