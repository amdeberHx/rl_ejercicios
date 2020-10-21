import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';

import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    OnlyNumbersDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
