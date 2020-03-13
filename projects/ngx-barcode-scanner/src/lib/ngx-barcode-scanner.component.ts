import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgxBarcodeScannerService} from './ngx-barcode-scanner.service';
import {QuaggaJSConfigObject} from '@ericblade/quagga2';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-barcode-scanner',
  templateUrl: './ngx-barcode-scanner.component.html',
  styleUrls: ['./ngx-barcode-scanner.component.css']
})
export class NgxBarcodeScannerComponent implements OnInit, OnDestroy {
  @Input() codes: string | string[] = [
    'code_128', 'ean', 'ean_8', 'code_39', 'code_39_vin',
    'codabar', 'upc', 'upc_e', 'i2of5', '2of5', 'code_93'];
  @Input() config: QuaggaJSConfigObject;
  @Input() errorThreshold: number;
  @Input() value: string;
  @Output() valueChange = new EventEmitter();
  @Output() exception = new EventEmitter();

  constructor(
    private service: NgxBarcodeScannerService
  ) {
  }

  ngOnInit(): void {
    const threshold = isNaN(this.errorThreshold) ? 0.1 : this.errorThreshold;
    this.service.start({
      ...this.config,
      decoder: {
        readers: this.readers()
      }
    }, threshold).subscribe((value) => {
      this.valueChange.emit(value);
      this.service.stop();
    }, error => {
      this.exception.emit(error);
    });
  }

  ngOnDestroy(): void {
    this.service.stop();
  }

  readers(): string[] {
    const types = (typeof this.codes === 'string') ? [this.codes] : this.codes;
    return types.map(it => it + '_reader');
  }

}
