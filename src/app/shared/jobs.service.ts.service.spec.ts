/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Jobs.service.tsService } from './jobs.service.ts.service';

describe('Service: Jobs.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Jobs.service.tsService]
    });
  });

  it('should ...', inject([Jobs.service.tsService], (service: Jobs.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
