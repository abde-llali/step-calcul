import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HaversineService } from 'ng2-haversine';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    //GoogleMapsModule
    
  ],
  providers: [HaversineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
