import { TestBed } from '@angular/core/testing';

import { GrindService } from './grind.service';

describe('GrindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrindService = TestBed.get(GrindService);
    expect(service).toBeTruthy();
  });
});
