import { TestBed } from '@angular/core/testing';

import { ApiErrorResponseCatchingInterceptor } from './api-error-response-catching.interceptor';

describe('ApiErrorResponseCatchingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiErrorResponseCatchingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiErrorResponseCatchingInterceptor = TestBed.inject(ApiErrorResponseCatchingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
