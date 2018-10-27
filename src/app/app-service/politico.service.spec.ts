import { TestBed, inject } from '@angular/core/testing';

import { PoliticoService } from './politico.service';

describe('PoliticoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliticoService]
    });
  });

  it('should be created', inject([PoliticoService], (service: PoliticoService) => {
    expect(service).toBeTruthy();
  }));
});
