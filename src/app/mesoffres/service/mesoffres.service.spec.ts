import { TestBed } from '@angular/core/testing';

import { MesoffresService } from './mesoffres.service';

describe('MesoffresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MesoffresService = TestBed.get(MesoffresService);
    expect(service).toBeTruthy();
  });
});
