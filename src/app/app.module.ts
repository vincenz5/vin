import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProfComponent } from './prof/prof.component';
import { WritingComponent } from './writing/writing.component';
import { PhotoComponent } from './photo/photo.component';
import { SoftwareComponent } from './software/software.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProfExplainComponent } from './prof/prof-explain/prof-explain.component';
import { WattwattComponent } from './prof/wattwatt/wattwatt.component';
import { DexgridComponent } from './prof/dexgrid/dexgrid.component';
import { TeslaComponent } from './prof/tesla/tesla.component';
import { SolarcComponent } from './prof/solarc/solarc.component';
import { ArcadisComponent } from './prof/arcadis/arcadis.component';
import { MonolithComponent } from './prof/monolith/monolith.component';
import { BaruchComponent } from './prof/baruch/baruch.component';
import { WarmhComponent } from './prof/warmh/warmh.component';
import { RpiComponent } from './prof/rpi/rpi.component';
import { LanguageComponent } from './prof/language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopbarComponent,
    ProfComponent,
    WritingComponent,
    PhotoComponent,
    SoftwareComponent,
    MainNavComponent,
    ProfExplainComponent,
    WattwattComponent,
    DexgridComponent,
    TeslaComponent,
    SolarcComponent,
    ArcadisComponent,
    MonolithComponent,
    BaruchComponent,
    WarmhComponent,
    RpiComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
