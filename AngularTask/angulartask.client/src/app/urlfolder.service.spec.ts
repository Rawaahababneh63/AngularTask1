import { TestBed } from '@angular/core/testing';

import { UrlfolderService } from './urlfolder.service';

describe('UrlfolderService', () => {
  let service: UrlfolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlfolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
