import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
// import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app'
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from "@angular/fire/storage";

// Web3
import { ethers } from 'ethers';

// Components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProfComponent } from './prof/prof.component';
import { WritingComponent } from './writing/writing.component';
import { PhotoComponent } from './photo/photo.component';
import { SoftwareComponent } from './software/software.component';
import { MainNavComponent } from './main-nav/main-nav.component';
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
import { ContactComponent } from './contact/contact.component';
import { BottomComponent } from './bottom/bottom.component';
import { SustainComponent } from './prof/sustain/sustain.component';
import { TcrComponent } from './software/tcr/tcr.component';
import { GsapComponent } from './software/gsap/gsap.component';
// Services
import { ServiceWorkerModule } from '@angular/service-worker';
import { AddtofireService } from 'src/app/service/addtofire.service';
import { environment } from '../environments/environment';

// Angular Materials
import { MatSidenavModule, MatGridListModule, MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatSnackBarModule } from "@angular/material";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';
import { MapComponent } from './software/map/map.component';
import { AnimationComponent } from './software/animation/animation.component';


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
    LanguageComponent,
    ContactComponent,
    BottomComponent,
    SustainComponent,
    TcrComponent,
    GsapComponent,
    MapComponent,
    AnimationComponent
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
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // AngularFireModule.initializeApp(environment.firebase),
    ],
  providers: [AngularFirestore, AddtofireService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
