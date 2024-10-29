import { NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './modules/input/input.component';
import { OutputComponent } from './modules/output/output.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
