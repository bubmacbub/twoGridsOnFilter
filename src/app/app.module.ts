import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { GridModule,PDFModule, ExcelModule } from '@progress/kendo-angular-grid';

import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { RatingComponent } from './rating.component';
import { GridOneComponent } from './grid-one/grid-one.component';
import { GridTwoComponent } from './grid-two/grid-two.component';
// import { PDFExportModule } from '@progress/kendo-angular-pdf-export';






@NgModule({
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,HttpClientModule,
    AppRoutingModule,
    GridModule,
    ExcelModule,
    
    ChartsModule,
    InputsModule,
    PDFModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent, RatingComponent, GridOneComponent, GridTwoComponent],
})
export class AppModule { }
