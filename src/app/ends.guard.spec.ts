import { TestBed } from '@angular/core/testing';

import { EndsGuard } from './ends.guard';

describe('EndsGuard', () => {
  let guard: EndsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EndsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
