import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent }  from './app.component';
import { DayComponent }   from './day.component';

@NgModule({
    imports:      [
        BrowserModule,
        AppRoutingModule
    ],

    declarations: [
        AppComponent,
        DayComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
