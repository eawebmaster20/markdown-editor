import { TestBed } from '@angular/core/testing';

import { CurrentDocumentService } from './current-document.service';

describe('CurrentDocumentService', () => {
  let service: CurrentDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
