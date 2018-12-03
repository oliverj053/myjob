import { TestBed } from '@angular/core/testing';

import { VacanteempleoService } from './vacanteempleo.service';

describe('VacanteempleoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacanteempleoService = TestBed.get(VacanteempleoService);
    expect(service).toBeTruthy();
  });
});
