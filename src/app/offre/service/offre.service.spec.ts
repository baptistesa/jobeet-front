import { TestBed } from '@angular/core/testing';

import { OffreService } from './offre.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OffreService = TestBed.get(OffreService);
    expect(service).toBeTruthy();
  });
});
