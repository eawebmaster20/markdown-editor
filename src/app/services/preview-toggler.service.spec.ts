import { TestBed } from '@angular/core/testing';

import { PreviewTogglerService } from './preview-toggler.service';

describe('PreviewTogglerService', () => {
  let service: PreviewTogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewTogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
