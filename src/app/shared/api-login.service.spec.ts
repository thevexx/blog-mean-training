import { TestBed } from '@angular/core/testing';

import { ApiLoginService } from './api-auth.service';

describe('ApiLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiLoginService = TestBed.get(ApiLoginService);
    expect(service).toBeTruthy();
  });
});
