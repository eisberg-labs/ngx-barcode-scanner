import { TestBed } from '@angular/core/testing';

import { NgxBarcodeScannerService } from './ngx-barcode-scanner.service';

describe('NgxBarcodeScannerService', () => {
  let service: NgxBarcodeScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBarcodeScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
