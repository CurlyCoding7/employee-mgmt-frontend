import { TestBed } from '@angular/core/testing';

import { EmplioyeeService } from './emplioyee.service';

describe('EmplioyeeService', () => {
  let service: EmplioyeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplioyeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
