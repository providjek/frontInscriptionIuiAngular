import { TestBed } from '@angular/core/testing';

import { AuthCandidatGuard } from './auth-candidat.guard';

describe('AuthCandidatGuard', () => {
  let guard: AuthCandidatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCandidatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
