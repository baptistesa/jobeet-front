import { TestBed } from '@angular/core/testing';

import { MatchsService } from './matchs.service';

describe('MatchsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchsService = TestBed.get(MatchsService);
    expect(service).toBeTruthy();
  });
});
