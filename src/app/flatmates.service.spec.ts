import { TestBed, inject } from '@angular/core/testing';

import { FlatmatesService } from './flatmates.service';

describe('FlatmatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlatmatesService]
    });
  });

  it('should be created', inject([FlatmatesService], (service: FlatmatesService) => {
    expect(service).toBeTruthy();
  }));
});
