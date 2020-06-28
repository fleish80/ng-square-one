import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperComponent } from './swiper/swiper.component';
import { Consumer1Component } from './consumer1/consumer1.component';
import { Consumer2Component } from './consumer2/consumer2.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    Consumer1Component,
    Consumer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
