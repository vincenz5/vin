import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProfComponent } from './prof/prof.component';
import { WritingComponent } from './writing/writing.component';
import { PhotoComponent } from './photo/photo.component';
import { SoftwareComponent } from './software/software.component';
import { ProfExplainComponent } from 'src/app/prof/prof-explain/prof-explain.component';
import { WattwattComponent } from 'src/app/prof/wattwatt/wattwatt.component';
import { ArcadisComponent } from 'src/app/prof/arcadis/arcadis.component';
import { BaruchComponent } from 'src/app/prof/baruch/baruch.component';
import { DexgridComponent } from 'src/app/prof/dexgrid/dexgrid.component';
import { LanguageComponent } from 'src/app/prof/language/language.component';
import { MonolithComponent } from 'src/app/prof/monolith/monolith.component';
import { RpiComponent } from 'src/app/prof/rpi/rpi.component';
import { SolarcComponent } from 'src/app/prof/solarc/solarc.component';
import { TeslaComponent } from 'src/app/prof/tesla/tesla.component';
import { WarmhComponent } from 'src/app/prof/warmh/warmh.component';
import { SustainComponent } from 'src/app/prof/sustain/sustain.component';
import { ContactComponent } from 'src/app/contact/contact.component';




const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'prof', component: ProfComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'prof-explain', component: ProfExplainComponent },
  { path: 'wattwatt', component: WattwattComponent },
  { path: 'arcadis', component: ArcadisComponent },
  { path: 'baruch', component: BaruchComponent },
  { path: 'dexgrid', component: DexgridComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'monolith', component: MonolithComponent },
  { path: 'rpi', component: RpiComponent },
  { path: 'solarc', component: SolarcComponent },
  { path: 'tesla', component: TeslaComponent },
  { path: 'warmh', component: WarmhComponent },
  { path: 'sustain', component: SustainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'software', component: SoftwareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
