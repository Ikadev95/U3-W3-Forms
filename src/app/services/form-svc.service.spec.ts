import { TestBed } from '@angular/core/testing';

import { FormSvcService } from './form-svc.service';

describe('FormSvcService', () => {
  let service: FormSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
