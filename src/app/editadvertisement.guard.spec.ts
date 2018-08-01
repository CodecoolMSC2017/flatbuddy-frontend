import { TestBed, async, inject } from '@angular/core/testing';

import { EditadvertisementGuard } from './editadvertisement.guard';

describe('EditadvertisementGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditadvertisementGuard]
    });
  });

  it('should ...', inject([EditadvertisementGuard], (guard: EditadvertisementGuard) => {
    expect(guard).toBeTruthy();
  }));
});
