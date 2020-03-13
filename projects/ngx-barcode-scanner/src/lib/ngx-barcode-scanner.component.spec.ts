import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxBarcodeScannerComponent} from './ngx-barcode-scanner.component';
import Quagga from '@ericblade/quagga2';

describe('NgxBarcodeScannerComponent', () => {
  let component: NgxBarcodeScannerComponent;
  let fixture: ComponentFixture<NgxBarcodeScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxBarcodeScannerComponent]
    }).compileComponents();
  });

  describe('Camera unavailable', () => {
    beforeEach(() => {
      spyOn(Quagga.CameraAccess, 'request').and.callFake(() => Promise.reject('Permission denied'));

      fixture = TestBed.createComponent(NgxBarcodeScannerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should report error', (done) => {
      expect(Quagga.CameraAccess.request).toHaveBeenCalled();
      component.exception.subscribe((err) => {
        expect(err).toBeDefined();
        expect(err).toBe('Permission denied');
        done();
      });
    });
  });

  // describe('Camera available', () => {
  //   xit('should scan a barcode');
  // });
});
