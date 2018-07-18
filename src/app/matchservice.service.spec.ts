import { TestBed, inject } from '@angular/core/testing';

import { MatchserviceService } from './matchservice.service';

describe('MatchserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchserviceService]
    });
  });

  it('should be created', inject([MatchserviceService], (service: MatchserviceService) => {
    expect(service).toBeTruthy();
  }));
});
