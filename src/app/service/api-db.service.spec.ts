import { TestBed } from '@angular/core/testing';

import { ApiDBService } from './api-db.service';

describe('ApiDBService', () => {
  let service: ApiDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
