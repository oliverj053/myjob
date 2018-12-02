import { TestBed, async, inject } from '@angular/core/testing';

import { LoginEGuard } from './login-e.guard';

describe('LoginEGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginEGuard]
    });
  });

  it('should ...', inject([LoginEGuard], (guard: LoginEGuard) => {
    expect(guard).toBeTruthy();
  }));
});
