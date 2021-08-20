## [ngx-barcode-scanner](https://github.com/eisberg-labs/ngx-barcode-scanner)

Angular 9+ Barcode scanner using [Quagga](https://github.com/ericblade/quagga2).
This project was generated with [Ngx Lib Starter](https://github.com/eisberg-labs/ngx-lib-starter) version 0.0.1.


## Installation

```sh
$ npm install @eisberg-labs/ngx-barcode-scanner --save
```

## Usage
First import to your module:
```typescript
   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       NgxBarcodeScannerModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }

```
And use in your component html
```html
<ngx-barcode-scanner [(value)]="value" [codes]="['code_128', 'ean', 'upc', 'upc_e', 'ean_8']" [errorThreshold]="0.1" (exception)="onError($event)"></ngx-barcode-scanner>
```

Supported API
---
### Properties

@Input() | Type | Required|Default|Description
---------|------|---------|-------|-------
codes | string, string[]| required | ['code_128', 'ean', 'ean_8', 'code_39', 'code_39_vin', 'codabar', 'upc', 'upc_e', 'i2of5', '2of5', 'code_93'] | Type of barcode algorithm to detect. Supported are *code_128*,*ean*,*ean_8*,*code_39*,*code_39_vin*,*codabar*,*upc*,*upc_e*,*i2of5*,*2of5*,*code_93*. Be aware that more codes you define, more possible false positives, and it might take longer to detect a barcode.
config | QuaggaJSConfigObject | optional | undefined | Optional [quagga](https://github.com/ericblade/quagga2/blob/253aa01999d0e4a912ca33b119c91fd15cd0294b/type-definitions/quagga.d.ts) config object (Define camera device id, media constraints ...).
errorThreshold | number | optional | 0.1 | Defines threshold of scan detect accuracy. Smaller the value, smaller chance of false positives.
value | string | required | undefined | Scan result outputs to value.

### Events

@Output() | Type | EventType | Required | Description
----------|------|-----------|----------|------------
valueChange | EventEmitter | string | required | Scan result updates
exception | EventEmitter | any | optional | Error events
## Demo
[Try the Demo in StackBlitz](https://stackblitz.com/edit/ngx-barcode-scanner-demo)

## License
MIT © [Eisberg Labs](http://www.eisberg-labs.com)
