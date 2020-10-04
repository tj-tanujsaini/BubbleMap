import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmchartsComponent } from './BubbleMap/amcharts/amcharts.component';
import { AmchartsConnectionComponent } from './ConnectionMap/amcharts/connection-amcharts.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    AmchartsComponent,
    AmchartsConnectionComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
