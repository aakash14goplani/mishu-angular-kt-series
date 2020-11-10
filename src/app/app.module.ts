import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservableComponent } from './observale/observale.component';
import { AppRoutingConfig } from './app.routing.config';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
