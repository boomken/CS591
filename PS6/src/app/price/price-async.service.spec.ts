import { TestBed } from '@angular/core/testing';

import { PriceAsyncService } from './price-async.service';

describe('PriceAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceAsyncService = TestBed.get(PriceAsyncService);
    expect(service).toBeTruthy();
  });
});
