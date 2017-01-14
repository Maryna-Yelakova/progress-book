import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent }  from './app.component';
import { MondayComponent }   from './monday.component';
import { TuesdayComponent }      from './tuesday.component';
import { WednesdayComponent }      from './wednesday.component';
import { ThursdayComponent }      from './thursday.component';
import { FridayComponent }      from './friday.component';



@NgModule({
    imports:      [
        BrowserModule,
        AppRoutingModule
    ],

    declarations: [
        AppComponent,
        MondayComponent,
        TuesdayComponent,
        WednesdayComponent,
        ThursdayComponent,
        FridayComponent,
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
