import { TestBed } from '@angular/core/testing';

import { EndsService } from './ends.service';

describe('EndsService', () => {
  let service: EndsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
