import { TestBed } from '@angular/core/testing';

import { AUTService } from './aut.service';

describe('AUTService', () => {
  let service: AUTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AUTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

