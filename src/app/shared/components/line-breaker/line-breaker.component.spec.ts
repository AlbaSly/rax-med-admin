import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBreakerComponent } from './line-breaker.component';

describe('LineBreakerComponent', () => {
  let component: LineBreakerComponent;
  let fixture: ComponentFixture<LineBreakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineBreakerComponent]
    });
    fixture = TestBed.createComponent(LineBreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
