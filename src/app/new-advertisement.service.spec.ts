import { TestBed, inject } from '@angular/core/testing';

import { NewAdvertisementService } from './new-advertisement.service';

describe('NewAdvertisementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewAdvertisementService]
    });
  });

  it('should be created', inject([NewAdvertisementService], (service: NewAdvertisementService) => {
    expect(service).toBeTruthy();
  }));
});
