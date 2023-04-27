[![Continuous Integration](https://github.com/eisberg-labs/ngx-barcode-scanner/actions/workflows/ci.yml/badge.svg)](https://github.com/eisberg-labs/ngx-barcode-scanner/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/eisberg-labs/ngx-barcode-scanner/branch/master/graph/badge.svg?token=GQCS6ZEVU3)](https://codecov.io/gh/eisberg-labs/ngx-barcode-scanner)
[![npm downloads](https://img.shields.io/npm/dm/@eisberg-labs/ngx-barcode-scanner.svg)](https://www.npmjs.com/package/@eisberg-labs/ngx-barcode-scanner)
[![npm latest package](https://img.shields.io/npm/v/@eisberg-labs/ngx-barcode-scanner/latest.svg)](https://www.npmjs.com/package/@eisberg-labs/ngx-barcode-scanner)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/eisberg-labs/ngx-barcode-scanner.svg)](https://isitmaintained.com/project/eisberg-labs/ngx-barcode-scanner 'Average time to resolve an issue')
[![Follow me](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anamarjanica/)

## [ngx-barcode-scanner](https://github.com/eisberg-labs/ngx-barcode-scanner)

> Angular 9+ Barcode scanner using [Quagga](https://github.com/ericblade/quagga2).

If you 👍 or use this project, consider giving it a ★, thanks! 🙌  


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [API](#api)
- [Changelog](#changelog)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Sponsors](#sponsors)
- [Contact](#contact)
- [License](#license)


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

### Start/stop scanning

**ngx-barcode-scanner** ties the scanning service `start` `onInit` and `stop` is `onDestroy`. You may want to control when `start` and `stop` scanner occurs with the help of `NgxBarcodeScannerService`:

```typescript
import {NgxBarcodeScannerService} from "@eisberg-labs/ngx-barcode-scanner";

@Component({
  selector: 'app-root',
  template: `<ngx-barcode-scanner [(value)]="value"
                     [codes]="['code_128', 'ean', 'upc', 'upc_e', 'ean_8']" [errorThreshold]="0.1" (exception)="onError($event)"></ngx-barcode-scanner>`
    <div style="display: flex; justify-content: space-between; margin: 5% auto">
        <button (click)="onStartButtonPress()">Start</button>
        <button (click)="onStopButtonPress()">Stop</button>
    </div>
})

constructor(
   service: NgxBarcodeScannerService
) {
  //Do constructor things...
}

onStartButtonPress() {
  this.service.start(this.quaggaConfig, 0.1)
}

onValueChanges(detectedValue: string) {
  console.log("Found this: " + detectedValue)
}

onStopButtonPress() {
  this.service.stop()
}
```

## Demo

[View Demo and Documentation](https://ngx-barcode-scanner.amarjanica.com)

## Api
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



## Changelog

All notable changes to this project will be documented in [this file](./CHANGELOG.md).
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## Code of Conduct

I follow the [Rust Code of Conduct](http://www.rust-lang.org/conduct.html).

## Contributing

Everyone is welcome to contribute. You can read more about [contributing here](./CONTRIBUTING.md).

## Sponsors

If you find this project useful, give it a star. You could also consider supporting us through the following platforms:
- [Become a GitHub Sponsor](https://github.com/sponsors/amarjanica)
- [Support me on Patreon](https://www.patreon.com/amarjanica)

As this project grows, I will showcase sponsors' logos and links in this section. Thank you for your support!

## Contact

Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/anamarjanica/).

## License
MIT © [Eisberg Labs](http://www.eisberg-labs.com)
