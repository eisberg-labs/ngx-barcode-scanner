import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>
  Barcode Scanner - detected barcode:
  <small style="color: blue;">{{value}}</small>
</h1>
<p style="color: red;" *ngIf="isError">Barcode scan is not available.</p>
<ngx-barcode-scanner
  [(value)]="value"
  [codes]="['code_128', 'ean', 'upc', 'upc_e', 'ean_8']"
  [errorThreshold]="0.1"
  (exception)="onError($event)"
></ngx-barcode-scanner>`
})
export class AppComponent {
  value: string = '';
  isError = false;

  onError(error: any) {
    console.error(error);
    this.isError = true;
  }
}
