import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProfComponent } from './prof/prof.component';
import { WritingComponent } from './writing/writing.component';
import { PhotoComponent } from './photo/photo.component';
import { SoftwareComponent } from './software/software.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopbarComponent,
    ProfComponent,
    WritingComponent,
    PhotoComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
