import { TestBed } from '@angular/core/testing';

import { DataretreiveService } from './dataretreive.service';

describe('DataretreiveService', () => {
  let service: DataretreiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataretreiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
