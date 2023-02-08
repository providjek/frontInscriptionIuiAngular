import { TestBed } from '@angular/core/testing';

import { CandidatureGuard } from './candidature.guard';

describe('CandidatureGuard', () => {
  let guard: CandidatureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidatureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
