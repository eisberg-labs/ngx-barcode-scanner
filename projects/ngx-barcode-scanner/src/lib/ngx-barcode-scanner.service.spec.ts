import {TestBed} from '@angular/core/testing';

import {NgxBarcodeScannerService} from './ngx-barcode-scanner.service';
import {Subject} from 'rxjs';

describe('NgxBarcodeScannerService', () => {
  let service: NgxBarcodeScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBarcodeScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be available for start after stopped', async () => {
    service.start(service.defaultConfig(), 0);
    await service.stop();
    const scanResult = service.start(service.defaultConfig(), 0) as Subject<string>;

    expect(scanResult.closed).toBeFalse();
  });
});
