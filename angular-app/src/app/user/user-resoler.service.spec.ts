import { TestBed } from '@angular/core/testing';

import { UserResolerService } from './user-resoler.service';

describe('UserResolerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserResolerService = TestBed.get(UserResolerService);
    expect(service).toBeTruthy();
  });
});
