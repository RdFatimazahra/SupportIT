import { TestBed } from '@angular/core/testing';

import { PanneServiceService } from './panne-service.service';

describe('PanneServiceService', () => {
  let service: PanneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
