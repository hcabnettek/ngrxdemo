import { TestBed } from '@angular/core/testing';

import { StarwarsapiService } from './starwarsapi.service';

describe('StarwarsapiService', () => {
  let service: StarwarsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarwarsapiService);
  });

  it('should be created', () => {


    expect(service).toBeTruthy();
  });
});
