import { TestBed } from '@angular/core/testing';

import { EmpservService } from './empserv.service';

describe('EmpservService', () => {
  let service: EmpservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
