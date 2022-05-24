import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';

import {MaterialExampleModule} from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import {CardFancy} from './card-fancy/card-fancy';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFancy
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    CardModule,
    AccordionModule,
    MatCardModule,
    MatRippleModule,
    ButtonModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
