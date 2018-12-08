import { TestBed, async, inject } from '@angular/core/testing';

import { NologinEGuard } from './nologin-e.guard';

describe('NologinEGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NologinEGuard]
    });
  });

  it('should ...', inject([NologinEGuard], (guard: NologinEGuard) => {
    expect(guard).toBeTruthy();
  }));
});
