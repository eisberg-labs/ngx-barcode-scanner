import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxBarcodeScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
