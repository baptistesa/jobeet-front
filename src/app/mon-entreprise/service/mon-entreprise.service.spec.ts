import { TestBed } from '@angular/core/testing';

import { MonEntrepriseService } from './mon-entreprise.service';

describe('MonEntrepriseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonEntrepriseService = TestBed.get(MonEntrepriseService);
    expect(service).toBeTruthy();
  });
});
