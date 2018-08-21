import { TestBed, inject } from '@angular/core/testing';

import { AdvertisementFilterService } from './advertisement-filter.service';

describe('AdvertisementFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertisementFilterService]
    });
  });

  it('should be created', inject([AdvertisementFilterService], (service: AdvertisementFilterService) => {
    expect(service).toBeTruthy();
  }));
});
