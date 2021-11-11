import {Injectable} from '@angular/core';
import Quagga, {QuaggaJSConfigObject, QuaggaJSResultObject} from '@ericblade/quagga2';
import {from, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxBarcodeScannerService {
  private scanResult ?: Subject<string>;

  constructor() { }

  public defaultConfig(): QuaggaJSConfigObject {
    return {
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
      },
      locator: {
        patchSize: 'medium',
        halfSample: false
      },
      locate: true,
      numOfWorkers: 8,
      frequency: 10
    };
  }

  isScanMatch(scanResult: QuaggaJSResultObject, errorThresholdPercentage: number): boolean {
    const avgErrors = this.meanBy(scanResult.codeResult.decodedCodes, 'error');
    return !!avgErrors && avgErrors < errorThresholdPercentage;
  }

  start(config: QuaggaJSConfigObject, errorThresholdPercentage: number): Observable<string> {
    if (typeof this.scanResult === 'undefined') {
      this.scanResult = new Subject<string>();
    }
    Quagga.onProcessed((scanResult: QuaggaJSResultObject) => {
      this.onProcessed(scanResult);
    });
    Quagga.onDetected((result: QuaggaJSResultObject) => {
      const barcode = result.codeResult.code;
      if (this.isScanMatch(result, errorThresholdPercentage)) {
        this.scanResult?.next(barcode + '');
      }
    });

    Quagga.init(config, async (error) => {
      if (error) {
        this.scanResult?.error(error);
        await this.stop();
      } else {
        Quagga.start();
      }
    });

    return this.scanResult;

  }

  stop(): Observable<void> {
    if (typeof this.scanResult !== 'undefined') {
      this.scanResult?.unsubscribe();
      this.scanResult = undefined;
    }
    return from(Quagga.stop());
  }

  /* eslint-disable */
  private meanBy(arr: any[], property: string): number | undefined {
    if (!arr) {
      return undefined;
    }
    return arr.reduce((acc, item) => (property in item) ? acc + item[property] : acc, 0) / arr.length;
  }

  private onProcessed(result: QuaggaJSResultObject) {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas: HTMLCanvasElement = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        const canvasWidth: string = drawingCanvas.getAttribute('width') ?? '0';
        const canvasHeight: string = drawingCanvas.getAttribute('height') ?? '0';
        const width = parseInt(canvasWidth, 10);
        const height = parseInt(canvasHeight, 10);
        drawingCtx.clearRect(0, 0, width, height);
        result.boxes.filter((box) => box !== result.box).forEach((box) => {
          Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 2});
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: '#00F', lineWidth: 2});
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
      }
    }
  }
}
