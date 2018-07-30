import { TestBed, inject } from '@angular/core/testing';

import { PendingMatchesService } from './pending-matches.service';

describe('PendingMatchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendingMatchesService]
    });
  });

  it('should be created', inject([PendingMatchesService], (service: PendingMatchesService) => {
    expect(service).toBeTruthy();
  }));
});
