import { TestBed, inject } from '@angular/core/testing';

import { RentadserviceService } from './rentadservice.service';

describe('RentadserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentadserviceService]
    });
  });

  it('should be created', inject([RentadserviceService], (service: RentadserviceService) => {
    expect(service).toBeTruthy();
  }));
});
