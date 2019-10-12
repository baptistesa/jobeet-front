import { TestBed } from '@angular/core/testing';

import { AllEntreprisesService } from './all-entreprises.service';

describe('AllEntreprisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllEntreprisesService = TestBed.get(AllEntreprisesService);
    expect(service).toBeTruthy();
  });
});
