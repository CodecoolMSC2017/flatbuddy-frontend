import { TestBed, inject } from '@angular/core/testing';

import { RentSlotsService } from './rent-slots.service';

describe('RentSlotsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentSlotsService]
    });
  });

  it('should be created', inject([RentSlotsService], (service: RentSlotsService) => {
    expect(service).toBeTruthy();
  }));
});
