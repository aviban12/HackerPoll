import { TestBed } from '@angular/core/testing';

import { ADEService } from './ade.service';

describe('ADEService', () => {
  let service: ADEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ADEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
