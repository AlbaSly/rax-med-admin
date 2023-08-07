import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtDdComponent } from './dt-dd.component';

describe('DtDdComponent', () => {
  let component: DtDdComponent;
  let fixture: ComponentFixture<DtDdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DtDdComponent]
    });
    fixture = TestBed.createComponent(DtDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
