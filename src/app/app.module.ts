import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProfComponent } from './prof/prof.component';
import { WritingComponent } from './writing/writing.component';
import { PhotoComponent } from './photo/photo.component';
import { SoftwareComponent } from './software/software.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
