import { TestBed, inject } from '@angular/core/testing';

import { FormserviceService } from './formservice.service';

describe('FormserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormserviceService]
    });
  });

  it('should be created', inject([FormserviceService], (service: FormserviceService) => {
    expect(service).toBeTruthy();
  }));
});
