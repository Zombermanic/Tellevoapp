import { TestBed } from '@angular/core/testing';

import { IngresarGuard } from './ingresar.guard';

describe('IngresarGuard', () => {
  let guard: IngresarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
