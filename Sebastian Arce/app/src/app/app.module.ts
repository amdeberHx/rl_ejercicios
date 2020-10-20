import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
      CuentasComponent,
      FilterPipe
   ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
