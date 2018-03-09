import { TestBed, inject } from '@angular/core/testing';

import { IosService } from './ios.service';

describe('IosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IosService]
    });
  });

  it('should be created', inject([IosService], (service: IosService) => {
    expect(service).toBeTruthy();
  }));
});
