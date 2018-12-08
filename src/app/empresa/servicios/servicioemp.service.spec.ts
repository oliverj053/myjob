import { TestBed } from '@angular/core/testing';

import { ServicioempService } from './servicioemp.service';

describe('ServicioempService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioempService = TestBed.get(ServicioempService);
    expect(service).toBeTruthy();
  });
});
